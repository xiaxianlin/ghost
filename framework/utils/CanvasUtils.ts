const CanvasUtils = {
    createContext: (width: number, height: number) => {
        let canvas = document.createElement('canvas')
        if (!canvas) {
            throw '浏览器不支持canvas'
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        if (!ctx) {
            throw 'canvas创建2d context失败'
        }
        return { canvas, ctx }
    },
}

export default CanvasUtils
