import { TextAlign, TextVerticalAlign } from '../types/Style'

export interface IBorder {
    color?: string
    width?: number
    style?: string
    radius?: number
}

export interface IBackground {
    color?: string
}

export interface IFont {
    size?: number
    family?: string
    weight?: number
    style?: string
}

export interface ITextStyle {
    color?: string
    font?: IFont
    lineHeight?: number
    align?: TextAlign
    verticalAlign?: TextVerticalAlign
}

interface IStyle {
    border?: IBorder
    background?: IBackground
}

export default IStyle
