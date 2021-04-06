import IAttribute, { IGroupAttribute } from '../../struct/interfaces/IAttribute'
import { IShape } from '../../struct/interfaces/ICore'
import { IGroup } from '../../struct/interfaces/IShape'
import Shape from '../Shape'

class Group<T> extends Shape<T> implements IGroup<IGroupAttribute> {
    protected shapes: Map<string, IShape<IAttribute>>

    constructor() {
        super()
        this.shapes = new Map()
    }

    add(shape: IShape<IAttribute>) {
        shape.setLayerId(this.id)
        this.shapes.set(shape.id, shape)
    }

    remove(id: string): boolean {
        return this.shapes.delete(id)
    }

    getImageInfo() {
        return null
    }
}

export default Group
