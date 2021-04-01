import { IPolygon } from '../interface/IShape'
import IStyle from '../interface/IStyle'
import Shape from './Shape'

abstract class Polygon<T> extends Shape<T> implements IPolygon<T> {
    style: IStyle = {}

    setStyle(style: IStyle): void {
        this.style = style
    }
}

export default Polygon
