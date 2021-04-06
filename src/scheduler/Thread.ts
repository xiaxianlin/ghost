import { IDrawerMessage, IDrawerResult, IThread } from '../struct/interfaces/IScheduler'
import { ThreadStatus } from '../struct/types/Scheduler'
import DrawerWorker from '../workers/drawer.worker'

class Thread implements IThread {
    id: string = ''
    worker: IDrawerWorker<IDrawerMessage, IDrawerResult> | null = null
    status: ThreadStatus = ThreadStatus.NONE

    private receive(data: IDrawerResult) {}

    init() {
        if (!this.worker) return
        this.worker = new DrawerWorker()
        this.worker.addEventListener('message', (evt) => this.receive(evt.data))
    }

    send(data: IDrawerMessage) {
        this.worker?.postMessage(data)
    }
}

export default Thread
