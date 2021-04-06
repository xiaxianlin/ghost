import { IDrawerMessage, IDrawerResult } from '../struct/interfaces/IScheduler'
const ctx: IDrawerWorkerContext<IDrawerMessage, IDrawerResult> = self as any

// Respond to message from parent thread
ctx.addEventListener('message', (event: any) => {
    console.log('worker', event)
})

export default (null as any) as IDrawerWorker<IDrawerMessage, IDrawerResult>
