import Scene from '../core/Scene'
import { RendererOptions } from '../struct/types/Renderer'

class Renderer {
    private container: HTMLElement
    private canvas: HTMLCanvasElement
    private options: RendererOptions = {}
    private ctx: CanvasRenderingContext2D

    private handleOptions(options: RendererOptions = {}): RendererOptions {
        return Object.assign({ width: document.body.offsetWidth, height: document.body.offsetHeight }, options)
    }

    constructor(container: HTMLElement | null, options?: RendererOptions) {
        if (!container) {
            throw 'container is null'
        }
        this.container = container
        // 处理参数选项
        this.options = this.handleOptions(options)
        // 初始化画布
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.options.width || 0
        this.canvas.height = this.options.height || 0
        let ctx = this.canvas.getContext('2d')
        if (!ctx) {
            throw '2d context is null'
        }
        this.ctx = ctx
        this.container.appendChild(this.canvas)
    }

    render(scene: Scene) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

export default Renderer
