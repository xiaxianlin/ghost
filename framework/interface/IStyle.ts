import { TextAlign, TextVerticalAlign } from '../types/Style';

interface IStyle {}

export interface IBorder {
    color: string
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
