import { IElement } from '../struct/interfaces/ICore'
import { Visitor } from '../struct/types/Common'
import { DrawInfo } from '../struct/types/Drawer'
import { BroadcastChannel } from '../struct/types/Tool'
import Broadcast from '../tool/Broadcast'
import StringUtils from '../utils/StringUtils'

abstract class Element implements IElement {
    protected changed: boolean = true

    id: string
    x: number = 0
    y: number = 0
    width: number = 0
    height: number = 0
    parent: IElement | null = null
    children: IElement[] = []

    visible: boolean = true
    inScreen: boolean = true
    isElement: boolean = true

    constructor() {
        this.id = StringUtils.idGenerator(8)
    }

    add(element: IElement): void {
        if (element === this) {
            throw new Error("Element.add: element can't be added as a child of itself.")
        }

        if (element && element.isElement) {
            if (element.parent !== null) {
                element.parent.remove(element)
            }
            element.parent = this
            this.children.push(element)
            Broadcast.send(BroadcastChannel.ELEMENT, { type: BroadcastChannel.ELEMENT_ADD, data: element })
            this.changed = true
        } else {
            throw new Error('Element.add: element not an instance of Element.')
        }
    }

    remove(element: IElement): void {
        let index = this.children.indexOf(element)
        if (index === -1) return
        element.parent = null
        this.children.splice(index, 1)
        Broadcast.send(BroadcastChannel.ELEMENT, { type: BroadcastChannel.ELEMENT_REMOVE, data: element })
        this.changed = true
    }

    clear(): void {
        for (let i = 0; i < this.children.length; i++) {
            let element = this.children[i]
            element.parent = null
            Broadcast.send(BroadcastChannel.ELEMENT, { type: BroadcastChannel.ELEMENT_REMOVE, data: element })
        }
        this.children = []
        this.changed = true
    }

    traverse(callback: Visitor<IElement>, reverse = false): void {
        if (reverse) {
            for (let i = this.children.length - 1; i >= 0; i--) {
                this.children[i].traverse(callback, reverse)
            }
            callback(this)
        } else {
            callback(this)
            for (let i = 0; i < this.children.length; i++) {
                this.children[i].traverse(callback, reverse)
            }
        }
    }

    abstract getDrawInfo(): DrawInfo | null
}

export default Element
