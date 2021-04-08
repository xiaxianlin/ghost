import { IFigure } from '../struct/interfaces/ICore'
import { DrawInfo } from '../struct/types/Drawer'
import Element from './Element'

abstract class Figure<T> extends Element implements IFigure<T> {
    sceneId: string = ''
    isFigure: boolean = true
    attribute: T = {} as T
    protected drawInfo: DrawInfo | null = null
}

export default Figure
