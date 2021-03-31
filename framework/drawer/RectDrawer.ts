import { IRect } from '../interface/IShape'
import AbstractDrawer from './AbstractDrawer'

class RectDrawer extends AbstractDrawer {
    draw(rect: IRect): void {
        let ctx = this._ctx
        let { x, y, width, height } = rect.attribute
        ctx.rect(x, y, width, height)
        ctx.stroke()
    }
}

export default RectDrawer
