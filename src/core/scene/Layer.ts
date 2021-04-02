import IAttribute from '../../struct/interfaces/IAttribute'
import { ILayer } from '../../struct/interfaces/IScene'
import IShape from '../../struct/interfaces/IShape'
import StringUtils from '../../utils/StringUtils'

class Layer implements ILayer {
    id: string = ''

    constructor() {
        this.id = StringUtils.idGenerator(8)
    }

    add(shape: IShape<IAttribute>) {
        shape.setLayerId(this.id)
    }

    remove(id: string): boolean {
        return false
    }
}

export default Layer
