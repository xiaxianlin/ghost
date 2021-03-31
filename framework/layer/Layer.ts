import DrawerFactory from '../drawer/Factory'
import ILayer from '../interface/ILayer'
import IShape from '../interface/IShape'
import CanvasUtils from '../utils/CanvasUtils'
import StringUtils from '../utils/StringUtils'

class Layer implements ILayer {
    private _shapes: Map<string, IShape> = new Map()
    private _canvas: HTMLCanvasElement
    private _ctx: CanvasRenderingContext2D
    private _drawer: DrawerFactory

    id: string = StringUtils.idGenerator(8)
    x: number = 0
    y: number = 0
    width: number = document.body.offsetWidth
    height: number = document.body.offsetHeight

    constructor() {
        let { canvas, ctx } = CanvasUtils.createContext(this.width, this.height)
        this._canvas = canvas
        this._ctx = ctx
        this._drawer = new DrawerFactory(this._ctx)
    }

    add(shape: IShape) {
        this._shapes.set(shape.id, shape)
        this._drawer.draw(shape)
    }

    remove(id: string): boolean {
        return this._shapes.delete(id)
    }

    getImage() {
        // document.body.append(this._canvas)
        return this._canvas
    }
}

export default Layer
