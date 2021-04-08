import IScheduler, { IThread } from '../interfaces/IScheduler'
import { FigureImage } from './Figure'
import { DrawerWorkerResult } from './Worker'

export enum ThreadStatus {
    FREE, // 空闲
    PROCESSING, // 运行中
}
export enum ThreadEvent {
    CHANGE = 'change',
}

export type ThreadEventMessage = {
    target: IThread
    data?: DrawerWorkerResult
}

export type ThreadEventListenr = (e: ThreadEventMessage) => void

export enum SchedulerStatus {
    FREE,
    WORK,
}

export enum SchedulerEvent {
    CHANGE = 'change',
    COMMIT = 'commit',
}

export type SchedulerEventMessage = {
    target: IScheduler
    data?: FigureImage[]
}

export type SchedulerEventListener = (e: SchedulerEventMessage) => void
