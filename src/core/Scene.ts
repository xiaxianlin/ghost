import { IScene } from '../struct/interfaces/ICore'
import Element from './Element'

class Scene extends Element implements IScene {
    protected prefix = 'sce_'
    isScene: boolean = true
    update(): void {
        throw new Error('Method not implemented.')
    }
}

export default Scene
