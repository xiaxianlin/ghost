export interface ISzie {
    width: number
    height: number
}

export interface IAxis {
    x: number
    y: number
}

export interface ITranslate {
    translate: IAxis
    translateX(x: number): void
    translateY(y: number): void
}

export interface IRotate {
    rotate: IAxis
    rotateX(x: number): void
    rotateY(y: number): void
}

export interface IScale {
    scale: IAxis
    scaleX(x: number): void
    scaleY(y: number): void
}

/**
 * 顶级父类属性，用于存储图元的属性
 */
interface IAttribute {}
/**
 * 矩形属性
 */
export interface IRectAttribute extends IAttribute, ISzie {}

export default IAttribute
