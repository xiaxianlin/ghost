import { IPackingSpace } from './ICore'
import IShape from './IShape'

interface ILayer extends IPackingSpace {
    id: string
    add(shape: IShape): void
    remove(id: string): boolean
    getImage(): HTMLCanvasElement
}

export default ILayer
