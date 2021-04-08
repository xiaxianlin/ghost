import { Visitor } from '../types/Common'
import { DrawInfo } from '../types/Drawer'

export interface IElement {
    // 主键
    id: string
    // 相对X轴位置
    x: number
    // 相对y轴位置
    y: number
    // 宽度
    width: number
    // 高度
    height: number
    // 是否可见
    visible: boolean
    // 父元素
    parent: IElement | null
    // 子元素
    children: IElement[]
    // 是否入屏
    readonly inScreen: boolean
    // 元素判断
    readonly isElement: boolean
    // 添加元素
    add(element: IElement): void
    // 移除元素
    remove(element: IElement): void
    // 清空元素
    clear(): void
    // 遍历自身以及子元素
    traverse(callback: Visitor<IElement>, reverse?: boolean): void
    // 获取绘制信息
    getDrawInfo(): DrawInfo | null
}

/**
 * 图形元素
 */
export interface IFigure<T> extends IElement {
    readonly isFigure: boolean
    // 属性
    readonly attribute: T

    sceneId: string
}

/**
 * 场景元素
 */
export interface IScene extends IElement {
    readonly isScene: boolean
    update(): void
}
