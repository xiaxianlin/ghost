import IAttribute from './IAttribute'
import { IElement } from './ICore'
import IShape from './IShape'

interface IScene extends IElement {
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

export interface ILayer extends IElement {
    add(shape: IShape<IAttribute>): void
    remove(id: string): boolean
}

export default IScene
