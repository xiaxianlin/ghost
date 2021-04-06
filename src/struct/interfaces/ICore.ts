import { Visitor } from '../types/Common'
import { LayerSource } from '../types/Core'
import { ImageInfo } from '../types/Drawer'
import IAttribute, { IPosition, ISize } from './IAttribute'
import ITransform from './ITransform'

export interface IElement {
    readonly id: string

    setId(id: string): void
}

/**
 * 图元接口
 */
export interface IShape<T> extends IElement {
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
    getImageInfo(): ImageInfo | null
}

export interface ILayer extends IElement {
    readonly isFull: boolean
    readonly source: LayerSource
    add(shape: IShape<IAttribute>): boolean
    remove(id: string): boolean
    forEach(visit: Visitor<IShape<IAttribute>>): void
}

export interface IScene {
    /**
     * 添加图元
     */
    addShape(shape: IShape<IAttribute>): void
    /**
     * 删除图元
     */
    removeShape(shapeId: string): boolean

    /**
     * 添加层
     */
    addLayer(layer: ILayer): void
    /**
     * 删除层
     */
    removeLayer(layerId: string): boolean
}
