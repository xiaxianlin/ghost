import Scene from './core/Scene'
import Rect from './core/shape/Rect'
import CanvasRenderer from './renderer/CanvasRenderer'

const Ghost = {
    Scene: Scene,
    Renderer: CanvasRenderer,

    // shapes
    Rect: Rect,
}

export default Ghost
