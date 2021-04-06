import IScheduler, { IThread } from '../struct/interfaces/IScheduler'

class Scheduler implements IScheduler {
    private maxThreadCount = 5
    private threads: Map<string, IThread>
    private init() {}

    constructor() {
        this.threads = new Map()
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
