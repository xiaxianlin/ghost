import IScheduler, { IThread } from '../struct/interfaces/IScheduler'
import { DrawInfo } from '../struct/types/Drawer'
import { SchedulerEvent, SchedulerEventListener, SchedulerStatus, ThreadEvent, ThreadEventMessage, ThreadStatus } from '../struct/types/Scheduler'
import Thread from './Thread'
let count = 0

class Scheduler implements IScheduler {
    private listeners: Map<SchedulerEvent, SchedulerEventListener> = new Map()
    // 状态
    private status: SchedulerStatus
    private thread1: IThread // 线程1
    private thread2: IThread // 线程2
    private thread3: IThread // 线程3
    private drawQueue: DrawInfo[][] // 数据队列

    private handleThreadChange(message: ThreadEventMessage) {
        let { data } = message
        // 回调change事件
        // let listener = this.listeners.get(SchedulerEvent.CHANGE)
        // if (listener) {
        //     listener({ target: this, data })
        // }
        console.log('recevie message', count++)
        this.work()
    }

    private createThread() {
        let thread = new Thread()
        thread.on(ThreadEvent.CHANGE, (message) => this.handleThreadChange(message))
        return thread
    }

    private getUsableThread() {
        if (this.thread1.status === ThreadStatus.FREE) {
            return this.thread1
        }
        if (this.thread2.status === ThreadStatus.FREE) {
            return this.thread2
        }
        if (this.thread3.status === ThreadStatus.FREE) {
            return this.thread3
        }
        return null
    }

    private work() {
        // 绘制队列为空的，则停止工作
        if (this.drawQueue.length === 0) {
            this.status = SchedulerStatus.WORK
            return
        }
        // 创建失败，则等待线程空闲

        let drawData = this.drawQueue.shift()
        let thread = this.getUsableThread()
        if (thread && drawData) {
            thread.post(drawData)
        }
        this.status = SchedulerStatus.WORK
        this.work()
    }

    private commit() {
        if (this.status === SchedulerStatus.WORK) return
        let listener = this.listeners.get(SchedulerEvent.COMMIT)
        if (listener) {
            listener({ target: this })
        }
        this.status = SchedulerStatus.FREE
    }

    constructor() {
        this.drawQueue = []
        this.status = SchedulerStatus.FREE
        this.thread1 = this.createThread()
        this.thread2 = this.createThread()
        this.thread3 = this.createThread()
    }

    on(evt: SchedulerEvent, listener: SchedulerEventListener): void {
        this.listeners.set(evt, listener)
    }

    reconciler(data: DrawInfo[]) {
        this.drawQueue.push(data)
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
