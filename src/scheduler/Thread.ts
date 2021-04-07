import { IThread } from '../struct/interfaces/IScheduler'
import { DrawerWorkerMessage, DrawerWorkerResult, ThreadStatus } from '../struct/types/Scheduler'
import DrawerWorker from '../workers/drawer.worker'

class Thread implements IThread {
    worker: IDrawerWorker<DrawerWorkerMessage, DrawerWorkerResult> | null = null
    status: ThreadStatus

    private receive(data: DrawerWorkerResult) {}

    protected init() {
        if (!this.worker) return
        this.worker = new DrawerWorker()
        this.worker.addEventListener('message', (evt) => this.receive(evt.data))
    }

    constructor() {
        this.status = ThreadStatus.FREE
        this.init()
    }

    send(data: DrawerWorkerMessage) {
        this.worker?.postMessage(data)
    }

    setStatus(status: ThreadStatus): void {
        this.status = status
    }
}

export default Thread
