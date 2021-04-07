import { Visitor } from '../types/Common'
import { ImageInfo } from '../types/Drawer'
import { IPosition, ISize } from './IAttribute'
import IStyle from './IStyle'
import ITransform from './ITransform'

export interface IElement {
    readonly id: string
    // 是否可见
    readonly visible: boolean
    // 是否在屏幕内
    readonly inScreen: boolean
    // 子元素集合
    readonly children: IElement[]
    // 父元素
    readonly parent: IElement | null
    // 尺寸
    readonly size: ISize
    // 变换
    readonly transform: ITransform
    // 相对位置
    readonly relativePosition: IPosition
    // 绝对位置
    readonly absolutePosition: IPosition

    readonly isElement: boolean

    setId(id: string): void
    setSize(width: number, height: number): void
    setVisible(visible: boolean): void
    setParent(parent: IElement | null): void

    add(element: IElement): void
    remove(element: IElement): void

    traverse(callback: Visitor<IElement>): void
}

/**
 * 图形元素
 */
export interface IFigure<T> extends IElement {
    readonly isFigure: boolean
    // 属性
    readonly attribute: T

    readonly style: IStyle

    setStyle(style: IStyle): void

    createImageInfo(): ImageInfo | null
}

/**
 * 场景元素
 */
export interface IScene extends IElement {
    readonly isScene: boolean
    update(): void
}
