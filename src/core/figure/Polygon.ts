import { IPolygon } from '../../struct/interfaces/IFigure'
import Figure from '../Figure'

abstract class Polygon<T> extends Figure<T> implements IPolygon<T> {}

export default Polygon
