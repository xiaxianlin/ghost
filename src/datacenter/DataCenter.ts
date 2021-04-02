import Layer from '../core/scene/Layer'
import Scene from '../core/scene/Scene'
import Shape from '../core/shape/Shape'
import { IElement } from '../struct/interfaces/ICore'
import Store from './Store'

let store: Store
const DataCenter = {
    init() {
        store = new Store()
    },
    add(element: IElement) {
        if (element instanceof Scene) {
            store.addScene(element)
        }

        if (element instanceof Layer) {
            store.addLayer(element)
        }

        if (element instanceof Shape) {
            store.addShape(element)
        }
    },
}

export default DataCenter
