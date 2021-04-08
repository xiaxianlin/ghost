import { IScene } from '../struct/interfaces/ICore'
import { RendererOptions } from '../struct/types/Renderer'
import Clocker from '../tool/Clocker'
import Renderer from './Renderer'

class CanvasRenderer extends Renderer {
    private canvas: HTMLCanvasElement
    private ctx: CanvasRenderingContext2D
    private scene: IScene | null = null

    protected handleComplete() {
        Clocker.stop()
        if (!this.scene) return
        let { width, height } = this.canvas
        this.ctx.clearRect(0, 0, width, height)
        // this.scene.traverse((ele) => {
        //     if (ele.image) {
        //         this.ctx.drawImage(ele.image, ele.x, ele.y, width, height)
        //     }
        // }, true)
    }

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

    render(scene: IScene) {
        Clocker.start()
        this.scene = scene
        this.factory.produce(scene)
    }
}

export default CanvasRenderer
