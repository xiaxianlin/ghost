import IAttribute from './IAttribute'
import { IFigure } from './ICore'

interface IDrawer {
    draw(shape: IFigure<IAttribute>): void
}

export default IDrawer
