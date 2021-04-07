import { IRectAttribute } from '../../struct/interfaces/IAttribute'
import { ShapeType } from '../../struct/types/Core'
import { ImageInfo } from '../../struct/types/Drawer'
import { RectOptions } from '../../struct/types/Figure'
import RectAttribute from '../attribute/RectAttibute'
import Figure from '../Figure'

class Rect extends Figure<IRectAttribute> {
    constructor(options?: RectOptions) {
        super()
        if (options) {
            let { x, y, width, height } = options
            this.attribute = new RectAttribute(x, y, width, height)
        }
        let { x, y, width, height } = this.attribute
        this.size.setSize(width, height)
        this.absolutePosition.setPosition(x, y)

        this.imageInfo = this.createImageInfo()
    }

    createImageInfo(): ImageInfo {
        let { width, height } = this.size
        return {
            type: ShapeType.POLYGON,
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
