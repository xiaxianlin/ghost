const ctx: TypedWorkerContext<any, any> = self as any

// Respond to message from parent thread
ctx.addEventListener('message', (event: any) => {
    console.log('worker', event)
})

export default (null as any) as TypedWorker<any, any>
