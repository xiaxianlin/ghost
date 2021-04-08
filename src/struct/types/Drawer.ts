export type Radius = number | { x: number; y: number }

export enum DrawType {
    POLYGON = 'polygon',
}

export type DrawInfo = {
    id: string
    type: DrawType // 图形类型
    paths?: any[] // 绘制路径
    radius?: Radius // 绘制圆或椭圆-半径
    border?: {
        color?: string // 边框颜色
        width?: number // 边框宽度
        style?: string // 边框样式
    }
    background?: {
        color?: string // 背景颜色
    }
}
