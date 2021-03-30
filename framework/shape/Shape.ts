import IShape from '../interface/IShape'
import ITransform from '../interface/ITransform'
import Transform from '../transform/Transform'

class Shape implements IShape {
    x: number = 0
    y: number = 0
    width: number = 0
    height: number = 0
    transform: ITransform = new Transform()

    setTransform(transform: ITransform): void {
        this.transform = transform
    }
}

export default Shape
