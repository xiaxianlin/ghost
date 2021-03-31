import Ghost from '../framework/Ghost'

const { Rect, Renderer, Scene } = Ghost

// 创建渲染器
const renderer = new Renderer(document.querySelector('#root'))

// 创建场景
const scene = new Scene()

// // 创建矩形
// const rect = new Rect({ x: 100, y: 100, width: 400, height: 300 })
// scene.addShape(rect)
let now = Date.now()
for (let i = 0; i < 1000; i++) {
    const rect = new Rect({ x: Math.random() * 1348, y: Math.random() * 950, width: 20, height: 15 })
    scene.addShape(rect)
}

// 渲染场景
renderer.render(scene)

console.log('time:', Date.now() - now, 'ms')
