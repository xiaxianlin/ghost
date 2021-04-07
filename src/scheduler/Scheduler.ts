import { THREAD_INIT_COUNT, THREAD_MAX_COUNT } from '../core/common/Constant'
import IScheduler, { IThread } from '../struct/interfaces/IScheduler'
import Thread from './Thread'

class Scheduler implements IScheduler {
    private maxCount = THREAD_MAX_COUNT
    private initCount = THREAD_INIT_COUNT
    private threads: IThread[] // 线程池
    private dataQueue: any[] // 数据队列
    
    private init() {
        for (let i = 0; i < this.initCount; i++) {
            let thread = new Thread()
            this.threads.push(thread)
        }
    }

    private prepare() {}

    private update() {}

    constructor() {
        this.threads = []
        this.dataQueue = []
        this.init()
    }

    work() {}

    commit() {}
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
