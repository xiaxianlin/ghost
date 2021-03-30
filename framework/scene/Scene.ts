import IScene from '../interface/IScene'
import IShape from '../interface/IShape'
import { ShapePosition } from '../types/Scene'

class Scene implements IScene {
    constructor() {}
    add(shape: IShape): number {
        throw new Error('Method not implemented.')
    }
    remove(position: ShapePosition): boolean {
        throw new Error('Method not implemented.')
    }
}

export default Scene
