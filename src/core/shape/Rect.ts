import { IRectAttribute } from '../../struct/interfaces/IAttribute'
import { RectOptions } from '../../struct/types/Shape'
import RectAttribute from '../attribute/RectAttibute'
import Polygon from './Polygon'

class Rect extends Polygon<IRectAttribute> {
    constructor(options?: RectOptions) {
        super()
        if (options) {
            let { x, y, width, height } = options
            this.attribute = new RectAttribute(x, y, width, height)
        }
        let { x, y, width, height } = this.attribute
        this.size.setSize(width, height)
        this.absolutePosition.setPosition(x, y)
    }

    getImage() {
        return null
    }
}

export default Rect
