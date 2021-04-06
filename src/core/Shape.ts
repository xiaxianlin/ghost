import { IPosition, ISize } from '../struct/interfaces/IAttribute'
import { IShape } from '../struct/interfaces/ICore'
import ITransform from '../struct/interfaces/ITransform'
import { ImageInfo } from '../struct/types/Drawer'
import StringUtils from '../utils/StringUtils'
import Position from './attribute/Postion'
import Size from './attribute/Size'
import Transform from './transform/Transform'

abstract class Shape<T> implements IShape<T> {
    id: string = ''
    layerId: string = ''
    groupId: string = ''
    attribute: T = {} as T
    size: ISize = new Size()
    transform: ITransform = new Transform()
    relativePosition: IPosition = new Position()
    absolutePosition: IPosition = new Position()

    constructor() {
        this.id = 'e_' + StringUtils.idGenerator(6)
    }

    setId(id: string) {
        this.id = 'e_' + id
    }

    setLayerId(id: string): void {
        this.layerId = id
    }

    setGroupId(id: string): void {
        this.groupId = id
    }

    abstract getImageInfo(): ImageInfo | null
}

export default Shape
