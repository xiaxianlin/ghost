import Rect from './core/figure/Rect'
import Scene from './core/Scene'
import CanvasRenderer from './renderer/CanvasRenderer'

const Ghost = {
    Scene: Scene,
    Renderer: CanvasRenderer,

    // shapes
    Rect: Rect,
}

export default Ghost
