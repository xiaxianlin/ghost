import { Visitor } from '../types/Common'
import IAttribute from './IAttribute'
import ILayer from './ILayer'
import IShape from './IShape'

interface IScene {
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

    shapeEach(visit: Visitor<IShape<IAttribute>>): void
}

export default IScene
