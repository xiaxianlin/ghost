import { IThread } from '../struct/interfaces/IScheduler'
import { DrawInfo } from '../struct/types/Drawer'
import { ThreadEvent, ThreadEventListenr, ThreadStatus } from '../struct/types/Scheduler'
import { DrawerWorkerMessage, DrawerWorkerResult } from '../struct/types/Worker'
import CanvasUtils from '../utils/CanvasUtils'
import StringUtils from '../utils/StringUtils'
import DrawerWorker from '../workers/drawer.worker'

class Thread implements IThread {
    private listeners: Map<ThreadEvent, ThreadEventListenr> = new Map()
    private canvas: OffscreenCanvas | null = null
    id: string
    worker: IDrawerWorker<DrawerWorkerMessage, DrawerWorkerResult> | null = null
    status: ThreadStatus

    private receive(data: DrawerWorkerResult) {
        this.status = ThreadStatus.FREE
        let listener = this.listeners.get(ThreadEvent.CHANGE)
        if (listener) {
            listener({ target: this, data })
        }
    }

    protected init() {
        if (this.worker) return
        this.canvas = CanvasUtils.createOffscreenCanvas(window.innerWidth, window.innerHeight)
        this.worker = new DrawerWorker()
        this.worker.addEventListener('message', (evt) => this.receive(evt.data))
        this.worker.postMessage(this.canvas, [this.canvas])
    }

    constructor() {
        this.id = StringUtils.idGenerator(8)
        this.status = ThreadStatus.FREE
        this.init()
    }

    on(evt: ThreadEvent, listener: ThreadEventListenr): void {
        this.listeners.set(evt, listener)
    }

    post(data: DrawInfo[]): void {
        if (this.worker) {
            this.status = ThreadStatus.PROCESSING
            this.worker.postMessage(data)
        }
    }
}

export default Thread
