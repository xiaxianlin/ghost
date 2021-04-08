import IStyle, { IBackground, IBorder, IFont } from '../../struct/interfaces/IStyle'

class Style implements IStyle {
    style: { readonly border?: IBorder | undefined; readonly background?: IBackground | undefined; readonly font?: IFont | undefined } = {}
    setBorder(boder: IBorder): void {
        throw new Error('Method not implemented.')
    }
    setBackground(background: IBackground): void {
        throw new Error('Method not implemented.')
    }
}

export default Style
