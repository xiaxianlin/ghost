import IAttribute from '../interface/IAttribute'
import IShape from '../interface/IShape'
import Rect from '../shape/Rect'
import RectDrawer from './RectDrawer'

class DrawerFactory {
    private _rectDrawer: RectDrawer

    constructor(ctx: CanvasRenderingContext2D) {
        this._rectDrawer = new RectDrawer(ctx)
    }

    draw(shape: IShape<IAttribute>) {
        if (shape instanceof Rect) {
            return this._rectDrawer.draw(shape as Rect)
        }
    }
}

export default DrawerFactory
