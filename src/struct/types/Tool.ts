export type BroadcastListener = (e: any) => void

export enum BroadcastChannel {
    SHAPE_UPDATE = 'shape_update',
    ELEMENT_ADD = 'element.add',
    ELEMENT_REMOVE = 'element.remove',
}
