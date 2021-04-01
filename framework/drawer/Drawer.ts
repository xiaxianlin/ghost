import IAttribute from '../interface/IAttribute'
import IDrawer from '../interface/IDrawer'
import IShape from '../interface/IShape'

abstract class Drawer implements IDrawer {
    protected _ctx: CanvasRenderingContext2D

    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx
    }

    abstract draw(shape: IShape<IAttribute>): void
}

export default Drawer
