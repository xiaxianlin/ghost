import Rect from '../shape/Rect'
import AbstractDrawer from './Drawer'

class RectDrawer extends AbstractDrawer {
    draw(rect: Rect): void {
        let ctx = this._ctx
        let { x, y, width, height } = rect.attribute
        ctx.rect(0, 0, width, height)
        ctx.stroke()
    }
}

export default RectDrawer
