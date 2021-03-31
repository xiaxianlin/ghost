/**
 * 占位空间
 */
export interface IPackingSpace {
    x: number
    y: number
    width: number
    height: number
}

/**
 * 绝对占位空间
 */
export interface IAbsolutePosition extends IPackingSpace {}

/**
 * 相对对占位空间
 */
export interface IRelationPosition extends IPackingSpace {}
