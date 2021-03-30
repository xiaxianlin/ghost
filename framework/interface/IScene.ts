import { ShapePosition } from '../types/Scene'
import IShape from './IShape'

interface IScene {
    /**
     * 添加图元，返回图元在场景的位置
     * @param shape 图形
     */
    add(shape: IShape): number
    remove(shape: ShapePosition): boolean
}

export default IScene
