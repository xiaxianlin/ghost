import ILayer from './ILayer'
import IShape from './IShape'

interface IScene {
    /**
     * 添加图元
     */
    addShape(shape: IShape): void
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

    draw(ctx: CanvasRenderingContext2D, width: number, height: number): void
}

export default IScene
