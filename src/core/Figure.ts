import { IFigure } from '../struct/interfaces/ICore'
import IStyle from '../struct/interfaces/IStyle'
import { ImageInfo } from '../struct/types/Drawer'
import Element from './Element'
import Style from './style/Style'

abstract class Figure<T> extends Element implements IFigure<T> {
    protected prefkx = 'fig_'
    isFigure: boolean = true
    attribute: T = {} as T
    style: IStyle
    imageInfo: ImageInfo | null = null

    constructor() {
        super()
        this.style = new Style()
    }

    setStyle(style: IStyle): void {
        this.style = style
    }

    abstract createImageInfo(): ImageInfo
}

export default Figure
