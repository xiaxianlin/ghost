import { IPosition, ISize } from '../struct/interfaces/IAttribute'
import { IElement } from '../struct/interfaces/ICore'
import ITransform from '../struct/interfaces/ITransform'
import { Visitor } from '../struct/types/Common'
import { BroadcastChannel } from '../struct/types/Tool'
import Broadcast from '../tool/Broadcast'
import StringUtils from '../utils/StringUtils'
import Position from './attribute/Postion'
import Size from './attribute/Size'
import Transform from './transform/Transform'

class Element implements IElement {
    protected prefix = ''
    id: string
    children: IElement[]
    parent: IElement | null
    visible: boolean
    inScreen: boolean
    size: ISize
    transform: ITransform
    relativePosition: IPosition
    absolutePosition: IPosition
    isElement: boolean = true

    constructor() {
        this.id = this.prefix + StringUtils.idGenerator(6)
        this.children = []
        this.parent = null
        this.visible = true
        this.inScreen = true
        this.size = new Size()
        this.transform = new Transform()
        this.relativePosition = new Position()
        this.absolutePosition = new Position()
    }

    setId(id: string) {
        this.id = this.prefix + id
    }

    setSize(width: number, height: number): void {
        this.size.setSize(width, height)
    }

    setVisible(visible: boolean): void {
        this.visible = visible
    }

    setParent(parent: IElement): void {
        this.parent = parent
    }

    add(element: IElement): void {
        if (element === this) {
            throw new Error("Element.add: element can't be added as a child of itself.")
        }

        if (element && element.isElement) {
            if (element.parent !== null) {
                element.parent.remove(element)
            }
            element.setParent(this)
            this.children.push(element)
            Broadcast.send(BroadcastChannel.ELEMENT_ADD, element)
        } else {
            throw new Error('Element.add: element not an instance of Element.')
        }
    }

    remove(element: IElement): void {
        let index = this.children.indexOf(element)
        if (index !== -1) {
            element.setParent(null)
            this.children.splice(index, 1)
            Broadcast.send(BroadcastChannel.ELEMENT_REMOVE, element)
        }
    }

    clear(): void {
        for (let i = 0; i < this.children.length; i++) {
            let element = this.children[i]
            element.setParent(null)
            Broadcast.send(BroadcastChannel.ELEMENT_REMOVE, element)
        }
        this.children = []
    }

    traverse(callback: Visitor<IElement>): void {
        callback(this)
        for (let i = 0, l = this.children.length; i < l; i++) {
            this.children[i].traverse(callback)
        }
    }
}

export default Element
