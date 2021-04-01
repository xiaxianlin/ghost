/**
 * 占位空间
 */
export interface IPackingSpace {
    x: number
    y: number
    width: number
    height: number
    
    setX(x: number): void
    setY(y: number): void
    setWidth(width: number): void
    setHeight(height: number): void
    setPosition(x: number, y: number): void
    setArea(width: number, height: number): void
    set(x: number, y: number, width: number, height: number): void
}

/**
 * 绝对占位空间
 */
export interface IAbsolutePosition extends IPackingSpace {}

/**
 * 相对对占位空间
 */
export interface IRelationPosition extends IPackingSpace {}
