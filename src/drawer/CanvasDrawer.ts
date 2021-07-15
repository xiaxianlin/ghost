import { IDrawer, TArc, TBezier2, TBezier3, TCircle, TEllipse, TLine, TPath, TPolygon, TStyle } from '../declare/DrawerDeclare'

class CanvasDrawer implements IDrawer {
    private _ctx: CanvasRenderingContext2D

    private _setBorder(style?: TStyle) {
        if (!style) return
        let { lineWidth, strokeStyle } = style
        if (lineWidth) {
            this._ctx.lineWidth = lineWidth
        }
        if (strokeStyle) {
            this._ctx.strokeStyle = strokeStyle
        }
        if (lineWidth || strokeStyle) {
            this._ctx.stroke()
        }
    }

    private _setBackground(style?: TStyle) {
        if (!style) return
        if (style.fillStyle) {
            this._ctx.save()
            this._ctx.fillStyle = style.fillStyle
            this._ctx.fill()
            this._ctx.restore()
        }
    }

    constructor(ctx: CanvasRenderingContext2D) {
        this._ctx = ctx
    }

    drawLine(line: TLine, style?: TStyle): void {
        let [start, end] = line
        this._ctx.beginPath()
        this._ctx.moveTo(...start)
        this._ctx.lineTo(...end)
        this._setBorder(style)
    }

    drawPolygon(polygon: TPolygon, style?: TStyle): void {
        if (polygon.length < 3) return
        this._ctx.beginPath()
        this._ctx.moveTo(...polygon[0])
        for (let i = 1; i < polygon.length; i++) {
            this._ctx.lineTo(...polygon[i])
        }
        // this._ctx.lineTo(...points[0])
        this._ctx.closePath()
        this._setBorder(style)
        this._setBackground(style)
    }

    drawCircle(circle: TCircle, style?: TStyle): void {
        let { center, radius } = circle
        this._ctx.beginPath()
        this._ctx.arc(center[0], center[1], radius, 0, 2 * Math.PI)
        this._setBorder(style)
        this._setBackground(style)
    }

    drawEllipse(ellipse: TEllipse, style?: TStyle): void {
        let { center, radius } = ellipse
        this._ctx.beginPath()
        this._ctx.ellipse(center[0], center[1], radius[0], radius[1], 0, 0, 2 * Math.PI)
        this._setBorder(style)
        this._setBackground(style)
    }

    drawArc(arc: TArc, style?: TStyle): void {
        let { center, radius, radians, anticlockwise } = arc
        this._ctx.beginPath()
        this._ctx.arc(center[0], center[1], radius, radians[0], radians[1], anticlockwise)
        this._setBorder(style)
    }

    drawBezier2(bezier: TBezier2, style?: TStyle): void {
        let [start, c1, end] = bezier
        this._ctx.beginPath()
        this._ctx.moveTo(...start)
        this._ctx.quadraticCurveTo(c1[0], c1[1], end[0], end[1])
        this._setBorder(style)
    }

    drawBezier3(bezier: TBezier3, style?: TStyle): void {
        let [start, c1, c2, end] = bezier
        this._ctx.beginPath()
        this._ctx.moveTo(...start)
        this._ctx.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], end[0], end[1])
        this._setBorder(style)
    }

    drawPath(path: TPath, style?: TStyle): void {
        if (path.length < 2) return
        if (path[0][0] !== 'M') {
            throw '路径第一个节点必须是M'
        }
        this._ctx.beginPath()
        for (let i = 0; i < path.length; i++) {
            let [key, d] = path[i]
            switch (key) {
                case 'M':
                    this._ctx.moveTo(d[0], d[1])
                case 'L':
                    this._ctx.lineTo(d[0], d[1])
                    break
                case 'A':
                    this._ctx.arcTo(d[0], d[1], d[2], d[3], d[4])
                    break
                case 'Q':
                    this._ctx.quadraticCurveTo(d[0], d[1], d[2], d[3])
                    break
                case 'C':
                    this._ctx.bezierCurveTo(d[0], d[1], d[2], d[3], d[4], d[5])
                    break
                case 'Z':
                    this._ctx.closePath()
                    this._setBorder(style)
                    this._setBackground(style)
                    return
            }
        }
        this._setBorder(style)
        this._setBackground(style)
    }
}

export default CanvasDrawer
