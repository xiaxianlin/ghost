import IAttribute from './IAttribute'
import { IShape } from './ICore'
import IStyle from './IStyle'

/**
 * 分组图元
 */
export interface IGroup<T> extends IShape<T> {
    add(shape: IShape<IAttribute>): void
    remove(id: string): boolean
}

/**
 * 多边形接口
 */
export interface IPolygon<T> extends IShape<T> {
    readonly style: IStyle
}
