import { TDrawer } from '../declare/DrawerDeclare'
import { IShape } from '../declare/ShapeDeclare'
import { BorderStyle, IStyleProps } from '../declare/ShapePropsDeclare'

type TBorder = [number, BorderStyle, string]

class Shape implements IShape {
    protected _x = 0
    protected _y = 0

    protected _border: TBorder = [0, BorderStyle.DASHED, '#000']
    protected _backgroundColor = ''

    protected _drawInfo: TDrawer = []

    private _handleBorder(border?: string) {
        if (!border) return
        let props = border.split(' ')
        if (props[0]) {
            let width = parseInt(props[0])
            if (!isNaN(width)) {
                this._border[0] = width
            }
        } else if (props[1]) {
            this._border[1] = props[1] as BorderStyle
        } else if (props[2]) {
            this._border[2] = props[2]
        }
    }

    constructor(style?: IStyleProps) {
        if (style) {
            this._handleBorder(style.border)
        }
    }

    getDrawInfo(): TDrawer {
        return this._drawInfo
    }
}

export default Shape
