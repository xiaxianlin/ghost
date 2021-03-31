import ILayer from '../interface/ILayer'
import IScene from '../interface/IScene'
import IShape from '../interface/IShape'
import Layer from '../layer/Layer'

class Scene implements IScene {
    private _layers: ILayer[] = []

    constructor() {
        this._layers = []
        this.addLayer(new Layer())
    }

    addShape(shape: IShape): void {
        this._layers[0].add(shape)
    }

    removeShape(id: string): boolean {
        return this._layers[0].remove(id)
    }

    addLayer(layer: ILayer): void {
        this._layers.push(layer)
    }

    removeLayer(id: string): boolean {
        let index = this._layers.findIndex((layer) => layer.id === id)
        if (index < 0) return false
        let data = this._layers.splice(index, 1)
        return data.length > 0
    }

    draw(ctx: CanvasRenderingContext2D, width: number, height: number): void {
        this._layers.forEach((layer) => {
            ctx.drawImage(layer.getImage(), 0, 0, width, height)
        })
    }
}

export default Scene
