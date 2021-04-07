import { IScene } from '../struct/interfaces/ICore'
import IRenderer from '../struct/interfaces/IRenderer'
import { RendererOptions } from '../struct/types/Renderer'
import RenderState from './RenderState'

abstract class Renderer implements IRenderer {
    protected container: HTMLElement
    protected options: RendererOptions = {}
    protected renderState: RenderState

    protected handleOptions(options: RendererOptions = {}): RendererOptions {
        return Object.assign({ width: window.innerWidth, height: window.innerHeight }, options)
    }

    constructor(container: HTMLElement | null, options?: RendererOptions) {
        if (!container) {
            throw 'container is null'
        }
        this.container = container
        // 处理参数选项
        this.options = this.handleOptions(options)

        this.renderState = new RenderState()
    }

    abstract render(scene: IScene): void
}

export default Renderer
