import { IPolygon } from '../interface/IShape'
import IStyle from '../interface/IStyle'
import Shape from './Shape'

abstract class Polygon extends Shape implements IPolygon {
    style: IStyle = {}

    setStyle(style: IStyle): void {
        this.style = style
    }
}

export default Polygon
