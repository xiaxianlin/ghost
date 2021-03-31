import IDrawer from '../interface/IDrawer'
import IShape from '../interface/IShape'

abstract class AbstractDrawer implements IDrawer {
    protected _ctx: CanvasRenderingContext2D

    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx
    }

    abstract draw(shape: IShape): void
}

export default AbstractDrawer
