import { DrawInfo } from '../types/Drawer'
import { SchedulerEvent, SchedulerEventListener, ThreadEvent, ThreadEventListenr, ThreadStatus } from '../types/Scheduler'

export interface IThread {
    readonly id: string
    readonly status: ThreadStatus
    on(evt: ThreadEvent, listener: ThreadEventListenr): void
    post(data: DrawInfo[]): void
}

interface IScheduler {
    on(evt: SchedulerEvent, listener: SchedulerEventListener): void
    reconciler(data: DrawInfo[]): void
}

export default IScheduler
