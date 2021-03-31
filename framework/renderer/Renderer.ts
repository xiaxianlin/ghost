import DrawerFactory from '../drawer/Factory'
import Scene from '../scene/Scene'
import { RendererOptions } from '../types/Renderer'

class Renderer {
    private _container: HTMLElement
    private _canvas: HTMLCanvasElement
    private _options: RendererOptions = {}
    private _ctx: CanvasRenderingContext2D
    private _drawerFactory: DrawerFactory

    private handleOptions(options: RendererOptions = {}): RendererOptions {
        return Object.assign({ width: document.body.offsetWidth, height: document.body.offsetHeight }, options)
    }

    constructor(container: HTMLElement | null, options?: RendererOptions) {
        if (!container) {
            throw 'container is null'
        }
        this._container = container

        this._options = this.handleOptions(options)

        this._canvas = document.createElement('canvas')
        this._canvas.width = this._options.width || 0
        this._canvas.height = this._options.height || 0

        let ctx = this._canvas.getContext('2d')
        if (!ctx) {
            throw '2d context is null'
        }
        this._ctx = ctx

        this._drawerFactory = new DrawerFactory(this._ctx)

        this._container.appendChild(this._canvas)
    }

    render(scene: Scene) {
        let { width, height } = this._canvas
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
        scene.draw(this._ctx, width, height)
    }
}

export default Renderer
