import { IPosition } from '../interface/IAttribute'

class Position implements IPosition {
    x: number = 0
    y: number = 0

    constructor(x?: number, y?: number) {
        if (x && y) {
            this.setPosition(x, y)
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
}

export default Position
