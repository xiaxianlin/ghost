import IAttribute from '../struct/interfaces/IAttribute'
import { ILayer, IShape } from '../struct/interfaces/ICore'
import { Visitor } from '../struct/types/Common'
import { LayerSource } from '../struct/types/Core'
import StringUtils from '../utils/StringUtils'
import { LAYER_MAX_SHAPE_COUNT } from './common/Constant'

class Layer implements ILayer {
    protected shapes: Map<string, IShape<IAttribute>>
    protected source: LayerSource
    id: string = ''
    isFull: boolean = false

    constructor(source?: LayerSource) {
        this.id = 'l_' + StringUtils.idGenerator(6)
        this.shapes = new Map()
        this.source = source || LayerSource.CUSTOM
    }

    setId(id: string) {
        this.id = 'l_' + id
    }

    add(shape: IShape<IAttribute>) {
        if (this.shapes.size >= LAYER_MAX_SHAPE_COUNT) {
            this.isFull = true
            return false
        }
        shape.setLayerId(this.id)
        this.shapes.set(shape.id, shape)
        return true
    }

    remove(id: string): boolean {
        this.isFull = false
        return this.shapes.delete(id)
    }

    forEach(visitor: Visitor<IShape<IAttribute>>) {}
}

export default Layer
