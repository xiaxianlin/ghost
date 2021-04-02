/**
 * 顶级父类属性，用于存储图元的属性
 */
interface IAttribute {}

export interface IPosition {
    x: number
    y: number

    setX(x: number): void
    setY(y: number): void
    setPosition(x: number, y: number): void
}

export interface ISize {
    width: number
    height: number

    setWidth(width: number): void
    setHeight(height: number): void
    setSize(width: number, height: number): void
}

export interface IGroupAttribute extends IAttribute {}

/**
 * 矩形属性
 */
export interface IRectAttribute extends IAttribute, IPosition, ISize {
    set(x: number, y: number, width: number, height: number): void
}

export default IAttribute
