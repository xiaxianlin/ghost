import ITransform, { IRotate, IScale, ISkew, ITranslate } from '../../struct/interfaces/ITransform'
import { TransformSetOptions } from '../../struct/types/Transform'
import Rotate from './Rotate'
import Scale from './Scale'
import Skew from './Skew'
import Translate from './Translate'

class Transform implements ITransform {
    translate: ITranslate = new Translate()
    rotate: IRotate = new Rotate()
    scale: IScale = new Scale()
    skew: ISkew = new Skew()
    opacity: number = 1

    setTranslate(options: TransformSetOptions): void {
        this.translate.x = options.x || this.translate.x
        this.translate.y = options.y || this.translate.y
    }

    setRotate(options: TransformSetOptions): void {
        this.translate.x = options.x || this.translate.x
        this.translate.y = options.y || this.translate.y
    }

    setScale(options: number | TransformSetOptions): void {
        if (typeof options === 'number') {
            this.translate.x = options || this.translate.x
            this.translate.y = options || this.translate.y
        } else {
            this.translate.x = options.x || this.translate.x
            this.translate.y = options.y || this.translate.y
        }
    }

    setSkew(options: TransformSetOptions): void {
        this.translate.x = options.x || this.translate.x
        this.translate.y = options.y || this.translate.y
    }

    setOpacity(opacity: number): void {
        this.opacity = opacity
    }
}

export default Transform
