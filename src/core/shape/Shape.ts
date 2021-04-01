import { IPosition, ISize } from '../../struct/interfaces/IAttribute'
import IShape from '../../struct/interfaces/IShape'
import ITransform from '../../struct/interfaces/ITransform'
import StringUtils from '../../utils/StringUtils'
import Position from '../attribute/Postion'
import Size from '../attribute/Size'
import Transform from '../transform/Transform'

abstract class Shape<T> implements IShape<T> {
    protected _canvas: HTMLCanvasElement | null = null
    protected _ctx: CanvasRenderingContext2D | null = null

    id: string = StringUtils.idGenerator(8)
    layerId: string = ''
    groupId: string = ''
    attribute: T = {} as T
    size: ISize = new Size()
    transform: ITransform = new Transform()
    relativePosition: IPosition = new Position()
    absolutePosition: IPosition = new Position()

    protected abstract draw(): void

    setLayerId(id: string): void {
        this.layerId = id
    }

    setGroupId(id: string): void {
        this.groupId = id
    }

    abstract getImage(): HTMLCanvasElement
}

export default Shape
