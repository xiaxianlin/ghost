import IAttribute from './IAttribute'
import { IShape } from './ICore'

interface IDrawer {
    draw(shape: IShape<IAttribute>): void
}

export default IDrawer
