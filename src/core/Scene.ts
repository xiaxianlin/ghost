import ScedulerBuilder from '../scheduler/Scheduler'
import IAttribute from '../struct/interfaces/IAttribute'
import { ILayer, IScene, IShape } from '../struct/interfaces/ICore'
import IScheduler from '../struct/interfaces/IScheduler'
import Layer from './Layer'

class Scene implements IScene {
    private shapes: Map<string, IShape<IAttribute>> // 图形对象
    private images: Map<string, ImageBitmap> // 图形图像
    private layers: ILayer[] // 层数据
    private scheduler: IScheduler // 调度器

    private getUsableLayer() {}

    constructor() {
        this.shapes = new Map()
        this.images = new Map()
        this.layers = [new Layer()]

        // 初始调度器以及图形数据容器
        this.scheduler = ScedulerBuilder.getScheduler()
    }

    addShape(shape: IShape<IAttribute>): void {
        this.shapes.set(shape.id, shape)

        this.layers[0].add(shape)
    }

    removeShape(id: string): boolean {
        this.shapes.delete(id)
        if (this.images.has(id)) this.images.delete(id)
        return this.layers[0].remove(id)
    }

    protected addLayer(layer: ILayer): void {
        layer.forEach((shape) => this.shapes.set(shape.id, shape))
        this.layers.push(layer)
    }

    protected removeLayer(id: string): boolean {
        let layer = this.layers.find((i) => i.id === id)
        if (!layer) return true
        try {
            layer.forEach((shape) => {
                if (this.images.has(id)) this.images.delete(shape.id)
                this.shapes.delete(shape.id)
            })
            this.layers = this.layers.filter((i) => i.id !== id)
        } catch (error) {
            return false
        }
        return true
    }
}

export default Scene
