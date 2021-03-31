import Position from '../core/Postion'
import { IAbsolutePosition, IRelationPosition } from '../interface/ICore'
import IShape, { IShapeAttribute } from '../interface/IShape'
import ITransform from '../interface/ITransform'
import Transform from '../transform/Transform'
import StringUtils from '../utils/StringUtils'

abstract class Shape implements IShape {
    id: string = StringUtils.idGenerator(8)
    attribute: IShapeAttribute = {}
    transform: ITransform = new Transform()
    relativePosition: IRelationPosition = new Position()
    absolutePosition: IAbsolutePosition = new Position()

    constructor(attribute?: IShapeAttribute) {
        if (attribute) {
            this.attribute = attribute
        }
    }

    setTransform(transform: ITransform): void {
        this.transform = transform
    }
}

export default Shape
