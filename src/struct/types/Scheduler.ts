import { ImageInfo } from './Drawer'

export enum ThreadStatus {
    NONE = 'none', // 未实例化
    WAIT = 'wait', // 等待运行
    PROCESS = 'PROCESS', // 运行中
    FREE = '', // 空闲
}

export type DrawerWorkerMessage = {
    canvas: OffscreenCanvas
    imageInfo: ImageInfo
}

export type DrawerWorkerResult = {}
