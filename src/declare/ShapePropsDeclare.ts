import { Axis } from './CommonDeclare';

export enum BorderStyle {
    SOLID = 'solid',
    DASHED = 'dashed',
}

export interface IStyleProps {
    border?: string
    borderWidth?: number
    borderColor?: string
    borderStyle?: string
    borderRadius?: number
    backgroundColor?: string
}

export interface IRectProps extends IStyleProps {
    x: number
    y: number
    width: number
    height: number
    radius?: number
}

export interface ILineProps extends IStyleProps {
    start: Axis
    end: Axis
}
