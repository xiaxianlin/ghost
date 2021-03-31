import { IRect, IRectAttribute } from '../interface/IShape'
import Polygon from './Polygon'

class Rect extends Polygon implements IRect {
    attribute: IRectAttribute = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    }
    constructor(options?: IRectAttribute) {
        super()
        if (options) {
            this.attribute = options
        }
    }
}

export default Rect
