import IAttribute from './IAttribute'
import IShape from './IShape'

interface IDrawer {
    draw(shape: IShape<IAttribute>): void
}

export default IDrawer
