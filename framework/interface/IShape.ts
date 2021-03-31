import { IAbsolutePosition, IRelationPosition } from './ICore'
import IStyle from './IStyle'
import ITransform from './ITransform'

/**
 * 顶级父类属性，用于存储图元的属性
 */
export interface IShapeAttribute {}

/**
 * 矩形属性
 */
export interface IRectAttribute extends IShapeAttribute {
    x: number
    y: number
    width: number
    height: number
}

/**
 * 图元接口
 */
interface IShape {
    id: string
    // 属性
    attribute: IShapeAttribute
    // 变换
    transform: ITransform
    // 相对位置
    relativePosition: IRelationPosition
    // 绝对位置
    absolutePosition: IAbsolutePosition
    // 设置变换
    setTransform(transform: ITransform): void
}

/**
 * 多边形接口
 */
export interface IPolygon extends IShape {
    style: IStyle
    setStyle(style: IStyle): void
}

export interface IRect extends IPolygon {
    attribute: IRectAttribute
}

export default IShape
