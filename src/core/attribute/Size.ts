import { ISize } from '../../struct/interfaces/IAttribute'

class Size implements ISize {
    width: number = 0
    height: number = 0

    constructor(width?: number, height?: number) {
        if (width && height) {
            this.setSize(width, height)
        }
    }

    setWidth(width: number): void {
        this.width = width
    }

    setHeight(height: number): void {
        this.height = height
    }

    setSize(width: number, height: number): void {
        this.width = width
        this.height = height
    }
}

export default Size
