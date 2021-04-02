import IAttribute, { IGroupAttribute } from '../struct/interfaces/IAttribute'
import IScene, { ILayer } from '../struct/interfaces/IScene'
import IShape, { IGroup } from '../struct/interfaces/IShape'

class Store {
    private scenes: Map<string, IScene> = new Map()
    private layers: Map<string, ILayer> = new Map()
    private groups: Map<string, IGroup<IGroupAttribute>> = new Map()
    private shapes: Map<string, IShape<IAttribute>> = new Map()

    private sceneRelations: Map<string, ILayer[]> = new Map()
    private layerRelations: Map<string, IShape<IAttribute>[]> = new Map()
    private groupRelations: Map<string, IShape<IAttribute>[]> = new Map()

    addShape(shape: IShape<IAttribute>) {
        this.shapes.set(shape.id, shape)
    }
    removeShape(id: string) {
        return this.shapes.delete(id)
    }

    addGroup(group: IGroup<IGroupAttribute>) {
        this.groups.set(group.id, group)
    }
    removeGroup(id: string) {
        return this.groups.delete(id)
    }

    addLayer(layer: ILayer) {
        this.layers.set(layer.id, layer)
    }
    removeLayer(id: string) {
        return this.layers.delete(id)
    }

    addScene(scene: IScene) {
        this.scenes.set(scene.id, scene)
    }
    removeScene(id: string) {
        return this.scenes.delete(id)
    }
}

export default Store
