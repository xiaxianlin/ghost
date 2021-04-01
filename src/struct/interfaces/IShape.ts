import { IPosition, ISize } from './IAttribute'
import IStyle from './IStyle'
import ITransform from './ITransform'

/**
 * 图元接口
 */
interface IShape<T> {
    readonly id: string
    readonly layerId: string
    readonly groupId: string
    // 属性
    readonly attribute: T
    // 尺寸
    readonly size: ISize
    // 变换
    readonly transform: ITransform
    // 相对位置
    readonly relativePosition: IPosition
    // 绝对位置
    readonly absolutePosition: IPosition

    setLayerId(id: string): void
    setGroupId(id: string): void

    /**
     * 获取图元画布
     */
    getImage(): HTMLCanvasElement
}

/**
 * 多边形接口
 */
export interface IPolygon<T> extends IShape<T> {
    readonly style: IStyle
}

export default IShape
