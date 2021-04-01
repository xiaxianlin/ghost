import { TransformSetOptions } from '../types/Transform'

export interface ITranslate {
    x: number
    y: number
}

export interface IRotate {
    x: number
    y: number
}

export interface IScale {
    x: number
    y: number
}

export interface ISkew {
    x: number
    y: number
}

interface ITransform {
    translate: ITranslate
    rotate: IRotate
    scale: IScale
    skew: ISkew
    opacity: number

    setTranslate(options: TransformSetOptions): void
    setRotate(options: TransformSetOptions): void
    setScale(options: TransformSetOptions | number): void
    setSkew(options: TransformSetOptions): void
    setOpacity(opacity: number): void
}

export default ITransform
