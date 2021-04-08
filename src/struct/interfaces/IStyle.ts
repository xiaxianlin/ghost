import { TextAlign, TextVerticalAlign } from '../types/Style'

export interface IBorder {
    readonly color?: string
    readonly width?: number
    readonly style?: string
    readonly radius?: number
}

export interface IBackground {
    readonly color?: string
}

export interface IFont {
    readonly size?: number
    readonly family?: string
    readonly weight?: number
    readonly style?: string
}

export interface ITextStyle {
    readonly color?: string
    readonly font?: IFont
    readonly lineHeight?: number
    readonly align?: TextAlign
    readonly verticalAlign?: TextVerticalAlign
}

interface IStyle {
    readonly style: {
        readonly border?: IBorder
        readonly background?: IBackground
        readonly font?: IFont
    }
    setBorder(boder: IBorder): void
    setBackground(background: IBackground): void
}

export default IStyle
