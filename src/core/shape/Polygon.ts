import { IPolygon } from '../../struct/interfaces/IShape'
import IStyle from '../../struct/interfaces/IStyle'
import Shape from '../Shape'

abstract class Polygon<T> extends Shape<T> implements IPolygon<T> {
    style: IStyle = {}

    setStyle(style: IStyle): void {
        this.style = style
    }
}

export default Polygon
