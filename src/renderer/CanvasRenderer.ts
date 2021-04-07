import Scene from '../core/Scene'
import { RendererOptions } from '../struct/types/Renderer'
import Renderer from './Renderer'

class CanvasRenderer extends Renderer {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D

    constructor(container: HTMLElement | null, options?: RendererOptions) {
        super(container, options)
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

    getCanvas() {
        return this.canvas
    }

    getContext() {
        return this.ctx
    }

    render(scene: Scene) {}
}

export default CanvasRenderer
