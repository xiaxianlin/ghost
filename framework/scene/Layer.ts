import IAttribute from '../interface/IAttribute'
import ILayer from '../interface/ILayer'
import IShape from '../interface/IShape'
import { Visitor } from '../types/Common'
import StringUtils from '../utils/StringUtils'

class Layer implements ILayer {
    private _shapes: Map<string, IShape<IAttribute>> = new Map()

    id: string = ''

    constructor(id?: string) {
        this.id = id || StringUtils.idGenerator(8)
    }

    add(shape: IShape<IAttribute>) {
        shape.setLayerId(this.id)
        this._shapes.set(shape.id, shape)
    }

    remove(id: string): boolean {
        return this._shapes.delete(id)
    }

    shapeEach(visit: Visitor<IShape<IAttribute>>): void {
        this._shapes.forEach((value) => visit(value))
    }
}

export default Layer
