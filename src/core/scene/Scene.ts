import IAttribute from '../../struct/interfaces/IAttribute'
import IScene, { ILayer } from '../../struct/interfaces/IScene'
import IShape from '../../struct/interfaces/IShape'
import StringUtils from '../../utils/StringUtils'
import Layer from './Layer'

class Scene implements IScene {
    id: string = ''

    constructor() {
        this.id = StringUtils.idGenerator(8)
        this.addLayer(new Layer())
    }

    addShape(shape: IShape<IAttribute>): void {}

    removeShape(id: string): boolean {
        return false
    }

    addLayer(layer: ILayer): void {}

    removeLayer(id: string): boolean {
        return false
    }
}

export default Scene
