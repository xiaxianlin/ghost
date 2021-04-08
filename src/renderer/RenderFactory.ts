import ScedulerBuilder from '../scheduler/Scheduler'
import { IElement, IScene } from '../struct/interfaces/ICore'
import IScheduler from '../struct/interfaces/IScheduler'
import { DrawInfo } from '../struct/types/Drawer'
import { FigureImage } from '../struct/types/Figure'
import { EFactoryStatus } from '../struct/types/Renderer'
import { SchedulerEvent } from '../struct/types/Scheduler'
import { BroadcastChannel, TBroadcastMessage } from '../struct/types/Tool'
import Broadcast from '../tool/Broadcast'

class RenderFactory {
    // 生产状态
    private status: EFactoryStatus = EFactoryStatus.NONE
    // 调度器
    private scheduler: IScheduler
    // 当前场景
    private scene: IScene | null = null
    // 当前场景下所有元素
    private elements: Map<string, IElement> = new Map()
    // 待更新的元素
    private waitUpdateElements: Map<string, IElement> = new Map()

    onComplete = () => {}

    private handleElementAdd(data: IElement) {
        this.elements.set(data.id, data)
        this.handleElementChange(data)
    }

    private handleElementRemove(data: IElement) {
        this.elements.delete(data.id)
        this.waitUpdateElements.delete(data.id)
    }

    private handleElementChange(data: IElement) {
        this.waitUpdateElements.set(data.id, data)
    }

    private handleMessage(message: TBroadcastMessage) {
        let { type, data } = message
        // 如果当前没有场景注入，则不处理任何消息
        if (!this.scene) return
        // 如果场景不匹配，则不处理
        if (data.sceneId !== this.scene.id) return
        switch (type) {
            case BroadcastChannel.ELEMENT_ADD:
                this.handleElementAdd(data)
                break
            case BroadcastChannel.ELEMENT_REMOVE:
                this.handleElementRemove(data)
                break
            case BroadcastChannel.ELEMENT_CHANGE:
                this.handleElementChange(data)
                break
        }
    }

    private handleSchedulerChange(data?: FigureImage[]) {
        console.log('change', Date.now())
        if (data) {
            // data.forEach((item) => Broadcast.send(BroadcastChannel.FIGUIRE_IMAGE, item))
        }
    }

    private init() {
        this.status = EFactoryStatus.NONE
        this.elements = new Map()
        this.waitUpdateElements = new Map()
    }

    private postScheduler() {
        if (this.waitUpdateElements.size === 0) return
        let data: DrawInfo[] = []
        this.waitUpdateElements.forEach((value) => {
            let info = value.getDrawInfo()
            if (info) {
                data.push(info)
            }
        })
        this.scheduler.reconciler(data)
    }

    constructor() {
        this.init()
        this.scheduler = ScedulerBuilder.getScheduler()
        this.scheduler.on(SchedulerEvent.CHANGE, (e) => this.handleSchedulerChange(e.data))
        this.scheduler.on(SchedulerEvent.COMMIT, () => this.onComplete())
        Broadcast.listen(BroadcastChannel.ELEMENT, (data) => this.handleMessage(data))
    }

    produce(scene: IScene) {
        if (this.scene && this.scene.id !== scene.id) {
            this.init()
        }
        // 如果当前状态为空，则读入全部元素
        if (this.status === EFactoryStatus.NONE) {
            scene.traverse((ele) => this.handleElementAdd(ele))
        }
        // 记录场景
        this.scene = scene
        // 提交给调度器
        this.postScheduler()
    }
}

export default RenderFactory
