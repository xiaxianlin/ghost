import { DrawInfo, DrawType } from '../struct/types/Drawer'
import CanvasUtils from '../utils/CanvasUtils'

let publicOffscreenCanvas: OffscreenCanvas
let publicOffscreenCtx: OffscreenCanvasRenderingContext2D

const drawPolygon = (info: DrawInfo, ctx: OffscreenCanvasRenderingContext2D) => {
    if (info.paths) {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        info.paths.map((position) => ctx.lineTo(position[0], position[1]))
        ctx.closePath()
        ctx.stroke()
    }
}

const draw = (info: DrawInfo, ctx: OffscreenCanvasRenderingContext2D | null) => {
    if (!ctx) return null
    switch (info.type) {
        case DrawType.POLYGON:
            drawPolygon(info, ctx)
            break
    }
}

const Drawer = {
    gePublicOffscreenCanvas() {
        if (!publicOffscreenCanvas) {
            publicOffscreenCanvas = CanvasUtils.createOffscreenCanvas(window.innerWidth, window.innerHeight)
            let ctx = publicOffscreenCanvas.getContext('2d')
            if (ctx) {
                publicOffscreenCtx = ctx
            }
        }
        publicOffscreenCtx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        return { canvas: publicOffscreenCanvas, context: publicOffscreenCtx }
    },
    draw(info: DrawInfo, canvas: OffscreenCanvas) {
        return this.drawByCtx(info, canvas, canvas.getContext('2d'))
    },
    drawByCtx(info: DrawInfo | null, canvas: OffscreenCanvas, ctx: OffscreenCanvasRenderingContext2D | null) {
        if (info) {
            draw(info, ctx)
        } else {
            return null
        }
        return canvas.transferToImageBitmap()
    },
}

export default Drawer
