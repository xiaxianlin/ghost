import { BroadcastChannel, BroadcastListener } from '../struct/types/Tool'

const channels: Map<BroadcastChannel, BroadcastListener[]> = new Map()

const Broadcast = {
    send: (channel: BroadcastChannel, data: any) => {
        let listeners = channels.get(channel) || []
        listeners.forEach((fn) => fn(data))
    },

    listen: (channel: BroadcastChannel, listener: BroadcastListener) => {
        let listeners = channels.get(channel) || []
        listeners.push(listener)
        channels.set(channel, listeners)
    },

    unlisten: (channel: BroadcastChannel, listener: BroadcastListener) => {
        let listeners = channels.get(channel) || []
        listeners = listeners.filter((fn) => fn !== listener)
        if (listeners.length) {
            channels.set(channel, listeners)
        } else {
            channels.delete(channel)
        }
    },
}

export default Broadcast
