import Scene from '../scene/Scene'
import { RendererOptions } from '../types/Options'

class Renderer {
    private _container: HTMLElement | null
    private _canvas: HTMLCanvasElement
    private _options: RendererOptions = {}

    private handleOptions(options: RendererOptions = {}): RendererOptions {
        return Object.assign({ width: document.body.offsetWidth, height: document.body.offsetHeight }, options)
    }

    constructor(selector: string, options?: RendererOptions) {
        this._container = document.querySelector(selector)
        if (!this._container) {
            throw `Can not find the html element of the selector is <${selector}> `
        }
        this._options = this.handleOptions(options)
        this._canvas = document.createElement('canvas')
        this._canvas.width = this._options.width || 0
        this._canvas.height = this._options.height || 0

        this._container.appendChild(this._canvas)
    }
    render(scene: Scene) {}
}

export default Renderer
