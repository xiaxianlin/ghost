import { IRectAttribute } from '../interface/IAttribute'

class RectAttribute implements IRectAttribute {
    x: number = 0
    y: number = 0
    width: number = 0
    height: number = 0

    constructor(x?: number, y?: number, width?: number, height?: number) {
        if (x && y) {
            this.setPosition(x, y)
        }

        if (x && y && width && height) {
            this.set(x, y, width, height)
        }
    }

    setX(x: number): void {
        this.x = x
    }

    setY(y: number): void {
        this.y = y
    }

    setPosition(x: number, y: number): void {
        this.x = x
        this.y = y
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

    set(x: number, y: number, width: number, height: number) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}

export default RectAttribute
