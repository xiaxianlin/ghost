import { ThreadStatus } from '../types/Scheduler'

export interface IThread {
    readonly status: ThreadStatus

    setStatus(status: ThreadStatus): void
}

interface IScheduler {
    work(): void
    commit(): void
}

export default IScheduler
