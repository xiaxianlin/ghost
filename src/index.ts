import Scene from './core/scene/Scene'
import Rect from './core/shape/Rect'
import DataCenter from './datacenter/DataCenter'
import Renderer from './renderer/Renderer'

DataCenter.init()

const Ghost = {
    Scene: Scene,
    Renderer: Renderer,

    // shapes
    Rect: Rect,
}

export default Ghost
