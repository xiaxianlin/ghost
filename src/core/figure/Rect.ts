import { IRectAttribute } from '../../struct/interfaces/IAttribute'
import { DrawInfo, DrawType } from '../../struct/types/Drawer'
import { RectOptions } from '../../struct/types/Figure'
import Figure from '../Figure'

class Rect extends Figure<IRectAttribute> {
    constructor(options?: RectOptions) {
        super()
        if (options) {
            let { x, y, width, height } = options
            this.x = x
            this.y = y
            this.width = width
            this.height = height
            this.attribute = { width, height }
        }
    }

    getDrawInfo(): DrawInfo {
        let { width, height } = this
        return {
            id: this.id,
            type: DrawType.POLYGON,
            paths: [
                [0, 0],
                [0, width],
                [width, height],
                [height, 0],
            ],
        }
    }
}

export default Rect
