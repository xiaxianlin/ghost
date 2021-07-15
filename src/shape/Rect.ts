import { TPath } from '../declare/DrawerDeclare'
import { IRect } from '../declare/ShapeDeclare'
import { IRectProps } from '../declare/ShapePropsDeclare'
import Shape from './Shape'

class Rect extends Shape implements IRect {
    private _w = 0
    private _h = 0
    private _r = 0
    private _calcDrawInfo() {
        let r = this._r

        let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = [
            [this._x, this._y],
            [this._x + this._w, this._y],
            [this._x + this._w, this._y + this._h],
            [this._x, this._y + this._h],
        ]

        let paths: TPath = [
            ['M', [x1 + r, y1]],
            ['L', [x2 - r, y2]],
            ['A', [x2, y2, x2, y2 + r, r]],
            ['L', [x3, y3 - r]],
            ['A', [x3, y3, x3 - r, y3, r]],
            ['L', [x4 + r, y4]],
            ['A', [x4, y4, x4, y4 - r, r]],
            ['L', [x1, y1 + r]],
            ['A', [x1, y1, x1 + r, y1, r]],
            ['Z', []],
        ]

        if (!r) {
            paths = paths.filter((item) => item[0] !== 'A')
        }

        this._drawInfo = paths
    }
    private _validRadius() {
        if (this._r === 0) {
            return
        }
        let min = this._w > this._h ? this._h : this._w
        if (this._r > min / 2) {
            this._r = min / 2
        }
    }
    constructor(options: IRectProps) {
        super(options)
        this._x = options.x
        this._y = options.y
        this._w = options.width
        this._h = options.height
        this._r = options.radius || 0
        this._validRadius()
        this._calcDrawInfo()
    }
    getDrawInfo(): TPath {
        return this._drawInfo as TPath
    }
    set x(value: number) {
        this._x = value
        this._calcDrawInfo()
    }
    get x() {
        return this._x
    }
    set y(value: number) {
        this._y = value
        this._calcDrawInfo()
    }
    get y() {
        return this._y
    }
    set width(value: number) {
        this._w = value
        this._calcDrawInfo()
    }
    get width() {
        return this._w
    }
    set height(value: number) {
        this._h = value
        this._calcDrawInfo()
    }
    get height() {
        return this._h
    }
    set radius(value: number) {
        this._r = value
        this._validRadius()
        this._calcDrawInfo()
    }
    get radius() {
        return this._r
    }
}

export default Rect
