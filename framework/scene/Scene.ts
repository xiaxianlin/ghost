import IAttribute from '../interface/IAttribute'
import ILayer from '../interface/ILayer'
import IScene from '../interface/IScene'
import IShape from '../interface/IShape'
import { Visitor } from '../types/Common'
import Layer from './Layer'

class Scene implements IScene {
    private _layers: ILayer[] = []

    constructor() {
        this._layers = []
        this.addLayer(new Layer())
    }

    addShape(shape: IShape<IAttribute>): void {
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

    shapeEach(visit: Visitor<IShape<IAttribute>>): void {
        this._layers.forEach((layer) => layer.shapeEach((value) => visit(value)))
    }
}

export default Scene
