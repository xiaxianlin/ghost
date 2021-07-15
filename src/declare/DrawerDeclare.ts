import { Axis } from './CommonDeclare'

export type TStyle = {
    lineWidth?: number
    strokeStyle?: string
    fillStyle?: string
}

export type TLine = [Axis, Axis]
export type TPolygon = Axis[]
export type TCircle = {
    center: Axis
    radius: number
}
export type TEllipse = {
    center: Axis
    radius: [number, number]
}
export type TArc = {
    center: Axis
    radius: number
    radians: [number, number]
    anticlockwise?: boolean
}
export type TBezier2 = [Axis, Axis, Axis]
export type TBezier3 = [Axis, Axis, Axis, Axis]

type PathKey = 'M' | 'L' | 'C' | 'Q' | 'A' | 'Z'
type PathNode = [PathKey, number[]]
export type TPath = PathNode[]

export type TDrawer = TLine | TPolygon | TCircle | TEllipse | TArc | TBezier2 | TBezier3 | TPath

export interface IDrawer {
    // 绘制线条
    drawLine(line: TLine, style?: TStyle): void
    // 绘制多边形
    drawPolygon(polygon: TPolygon, style?: TStyle): void
    // 绘制圆
    drawCircle(circle: TCircle, style?: TStyle): void
    // 绘制椭圆
    drawEllipse(ellipse: TEllipse, style?: TStyle): void
    // 绘制弧线
    drawArc(arc: TArc, style?: TStyle): void
    // 二次贝塞尔曲线
    drawBezier2(bezier: TBezier2, style?: TStyle): void
    // 三次贝塞尔曲线
    drawBezier3(bezier: TBezier3, style?: TStyle): void

    drawPath(path: TPath, style?: TStyle): void
}
