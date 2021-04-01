import { Visitor } from '../types/Common'
import IAttribute from './IAttribute'
import IShape from './IShape'

interface ILayer {
    readonly id: string
    add(shape: IShape<IAttribute>): void
    remove(id: string): boolean

    shapeEach(visit: Visitor<IShape<IAttribute>>): void
}

export default ILayer
