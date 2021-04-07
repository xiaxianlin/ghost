import { IScene } from './ICore'

interface IRenderer {
    render(scene: IScene): void
}

export default IRenderer
