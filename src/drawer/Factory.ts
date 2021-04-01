import Rect from '../core/shape/Rect'
import IAttribute from '../struct/interfaces/IAttribute'
import IShape from '../struct/interfaces/IShape'
import RectDrawer from './RectDrawer'

class DrawerFactory {
    private _rectDrawer: RectDrawer

    constructor(ctx: CanvasRenderingContext2D) {
        this._rectDrawer = new RectDrawer(ctx)
    }

    draw(shape: IShape<IAttribute
        >) {
        if (shape instanceof Rect) {
            return this._rectDrawer.draw(shape as Rect)
        }
    }
}

export default DrawerFactory
