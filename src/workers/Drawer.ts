import { DrawInfo, DrawType } from '../struct/types/Drawer'

const drawPolygon = (info: DrawInfo, ctx: OffscreenCanvasRenderingContext2D) => {
    if (info.paths) {
        ctx.beginPath()
        ctx.moveTo(0, 0)
        info.paths.map((position) => ctx.lineTo(position[0], position[1]))
        ctx.closePath()
        ctx.stroke()
    }
}

const Drawer = {
    draw(info: DrawInfo, canvas: OffscreenCanvas) {
        let ctx = canvas.getContext('2d')
        if (!ctx) return null
        switch (info.type) {
            case DrawType.POLYGON:
                drawPolygon(info, ctx)
                break
        }
        return canvas.transferToImageBitmap()
    },
}

export default Drawer
