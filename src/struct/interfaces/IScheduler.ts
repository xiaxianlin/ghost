import { ThreadStatus } from '../types/Scheduler'

export interface IDrawerMessage {}

export interface IDrawerResult {}

export interface IThread {
    id: string
    worker: IDrawerWorker<IDrawerMessage, IDrawerResult> | null
    status: ThreadStatus
}

interface IScheduler {}

export default IScheduler
