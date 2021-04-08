import IAttribute from '../struct/interfaces/IAttribute'
import { IFigure, IScene } from '../struct/interfaces/ICore'
import Element from './Element'

class Scene extends Element implements IScene {
    isScene: boolean = true

    add(element: IFigure<IAttribute>): void {
        super.add(element)
        element.sceneId = this.id
    }

    update(): void {
        throw new Error('Method not implemented.')
    }

    getDrawInfo() {
        return null
    }
}

export default Scene
