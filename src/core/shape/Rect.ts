import RectDrawer from '../../drawer/RectDrawer'
import { IRectAttribute } from '../../struct/interfaces/IAttribute'
import { RectOptions } from '../../struct/types/Shape'
import CanvasUtils from '../../utils/CanvasUtils'
import RectAttribute from '../attribute/RectAttibute'
import Polygon from './Polygon'

class Rect extends Polygon<IRectAttribute> {
    private _drawer: RectDrawer

    constructor(options?: RectOptions) {
        super()
        if (options) {
            let { x, y, width, height } = options
            this.attribute = new RectAttribute(x, y, width, height)
        }
        let { x, y, width, height } = this.attribute
        this.size.setSize(width, height)
        this.absolutePosition.setPosition(x, y)

        let { canvas, ctx } = CanvasUtils.createContext(this.attribute.width, this.attribute.height)
        this._canvas = canvas
        this._ctx = ctx
        this._drawer = new RectDrawer(this._ctx)
        this.draw()
    }

    protected draw() {
        if (!this._ctx) return
        this._ctx.clearRect(0, 0, this.attribute.width, this.attribute.height)
        this._drawer.draw(this)
    }

    getImage() {
        if (!this._canvas) {
            throw `Rect [${this.id}]：canvas is missing`
        }
        return this._canvas
    }
}

export default Rect
