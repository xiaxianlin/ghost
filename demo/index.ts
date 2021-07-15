import DrawerBuilder from '../src/drawer'
import Rect from '../src/shape/Rect'

let canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

let ctx = canvas.getContext('2d')

let drawer = DrawerBuilder.create(ctx)

let rect = new Rect({
    x: 100,
    y: 100,
    width: 300,
    height: 200,
    radius: 50,
})

drawer.drawPath(rect.getDrawInfo(), { strokeStyle: 'red', lineWidth: 10, fillStyle: 'yellow' })
