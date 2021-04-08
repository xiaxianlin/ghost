import { DrawInfo } from '../struct/types/Drawer'
import { DrawerWorkerMessage, DrawerWorkerResult } from '../struct/types/Worker'
import Drawer from './Drawer'
const ctx: IDrawerWorkerContext<DrawerWorkerMessage, DrawerWorkerResult> = self as any

let canvas: OffscreenCanvas
// Respond to message from parent thread
ctx.addEventListener('message', (event: any) => {
    let { data } = event
    if (data instanceof OffscreenCanvas) {
        canvas = data
    } else {
        let result: DrawerWorkerResult = data.map((info: DrawInfo) => {
            return {
                id: info.id,
                image: Drawer.draw(info, canvas),
            }
        })

        ctx.postMessage(
            result,
            result.map((r) => r.image)
        )
    }
})

export default (null as any) as IDrawerWorker<DrawerWorkerMessage, DrawerWorkerResult>
