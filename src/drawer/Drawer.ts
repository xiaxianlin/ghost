import IAttribute from '../struct/interfaces/IAttribute'
import IDrawer from '../struct/interfaces/IDrawer'
import IShape from '../struct/interfaces/IShape'

abstract class Drawer implements IDrawer {
    protected _ctx: CanvasRenderingContext2D

    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx
    }

    abstract draw(shape: IShape<IAttribute>): void
}

export default Drawer

