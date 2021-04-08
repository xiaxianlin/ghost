export type BroadcastListener = (e: any) => void

export type TBroadcastMessage = {
    type: string
    data: any
}

export enum BroadcastChannel {
    ELEMENT = 'element',
    ELEMENT_CHANGE = 'element.change',
    ELEMENT_ADD = 'element.add',
    ELEMENT_REMOVE = 'element.remove',
    FIGUIRE_IMAGE = 'figure.image',
}
