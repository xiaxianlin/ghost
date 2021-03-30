import ITransform from './ITransform'

interface IShape {
    x: number
    y: number
    width: number
    height: number
    transform: ITransform

    setTransform(transform: ITransform): void
}

export default IShape
