const CanvasUtils = {
    createCanvas: (width: number, height: number) => {
        let canvas = document.createElement('canvas')
        if (!canvas) {
            throw '浏览器不支持canvas'
        }
        canvas.width = width
        canvas.height = height
        return canvas
    },
    createContext: (width: number, height: number) => {
        let canvas = CanvasUtils.createCanvas(width, height)
        let ctx = canvas.getContext('2d')
        if (!ctx) {
            throw 'canvas创建2d context失败'
        }
        return ctx
    },

    createOffscreenCanvas: (width: number, height: number) => {
        let canvas = CanvasUtils.createCanvas(width, height)
        return canvas.transferControlToOffscreen()
    },
}

export default CanvasUtils
