import { THREAD_CHUNK_SIZE, THREAD_INIT_COUNT, THREAD_MAX_COUNT } from '../common/Constant'
import IScheduler, { IThread } from '../struct/interfaces/IScheduler'
import { DrawInfo } from '../struct/types/Drawer'
import { SchedulerEvent, SchedulerEventListener, SchedulerStatus, ThreadEvent, ThreadEventMessage, ThreadStatus } from '../struct/types/Scheduler'
import Thread from './Thread'

class Scheduler implements IScheduler {
    private listeners: Map<SchedulerEvent, SchedulerEventListener> = new Map()
    // 状态
    private status: SchedulerStatus
    // 当前线程数量
    private count: number
    private threads: IThread[] // 线程池
    private drawQueue: DrawInfo[][] // 数据队列

    private handleThreadChange(message: ThreadEventMessage) {
        let { data } = message
        this.work()
        // 回调change事件
        let listener = this.listeners.get(SchedulerEvent.CHANGE)
        if (listener) {
            listener({ target: this, data })
        }
        this.commit()
    }

    private createThread() {
        if (this.threads.length >= THREAD_MAX_COUNT) return
        let thread = new Thread()
        thread.on(ThreadEvent.CHANGE, (message) => this.handleThreadChange(message))
        this.threads.push(thread)
        return thread
    }

    private enqueue(data: DrawInfo[]) {
        let len = data.length
        let count = Math.ceil(len / THREAD_CHUNK_SIZE)
        for (let i = 0; i < count; i++) {
            this.drawQueue.push(data.slice(i * THREAD_CHUNK_SIZE, (i + 1) * THREAD_CHUNK_SIZE))
        }
    }

    private work() {
        // 绘制队列为空的，则停止工作
        if (this.drawQueue.length === 0) {
            return
        }
        let thread: IThread | undefined = this.threads.find((t) => t.status === ThreadStatus.FREE)
        // 找不到空闲线程
        if (!thread) {
            // 尝试创建新的线程
            thread = this.createThread()
        }
        // 创建失败，则等待线程空闲
        if (!thread) return
        let drawData = this.drawQueue.shift()
        if (drawData) {
            thread.post(drawData)
        }
        this.status = SchedulerStatus.WORK
        this.work()
    }

    private commit() {
        if (this.drawQueue.length > 0) return
        if (this.threads.some((t) => t.status !== ThreadStatus.FREE)) return
        if (this.status === SchedulerStatus.FREE) return
        console.log('commit')
        let listener = this.listeners.get(SchedulerEvent.COMMIT)
        if (listener) {
            listener({ target: this })
        }
        this.status = SchedulerStatus.FREE
    }

    constructor() {
        this.threads = []
        this.drawQueue = []
        this.status = SchedulerStatus.FREE
        this.count = THREAD_INIT_COUNT
        for (let i = 0; i < this.count; i++) {
            this.createThread()
        }
    }

    on(evt: SchedulerEvent, listener: SchedulerEventListener): void {
        this.listeners.set(evt, listener)
    }

    reconciler(data: DrawInfo[]) {
        this.enqueue(data)
        if (this.status === SchedulerStatus.FREE) {
            this.work()
        }
    }
}

class ScedulerBuilder {
    private static scheduler: IScheduler | null = null
    static getScheduler() {
        if (!ScedulerBuilder.scheduler) {
            ScedulerBuilder.scheduler = new Scheduler()
        }
        return ScedulerBuilder.scheduler
    }
    constructor() {
        throw 'ScedulerBuilder cannot use new operation.'
    }
}

export default ScedulerBuilder
