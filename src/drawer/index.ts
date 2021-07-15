import { IDrawer } from '../declare/DrawerDeclare'
import CanvasDrawer from './CanvasDrawer'

class Drawer implements IDrawer {
    drawLine(): void {
        throw new Error('Method not implemented.')
    }
    drawPolygon(): void {
        throw new Error('Method not implemented.')
    }
    drawCircle(): void {
        throw new Error('Method not implemented.')
    }
    drawEllipse(): void {
        throw new Error('Method not implemented.')
    }
    drawArc(): void {
        throw new Error('Method not implemented.')
    }
    drawBezier2(): void {
        throw new Error('Method not implemented.')
    }
    drawBezier3(): void {
        throw new Error('Method not implemented.')
    }
    drawPath(): void {
        throw new Error('Method not implemented.')
    }
}

const DrawerBuilder = {
    create(medium: HTMLElement | CanvasRenderingContext2D | SVGAElement | null): IDrawer {
        if (medium instanceof CanvasRenderingContext2D) {
            return new CanvasDrawer(medium)
        }
        return new Drawer()
    },
}

export default DrawerBuilder
