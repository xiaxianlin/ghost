declare interface IDrawerWorker<M, R> {
    new (): IDrawerWorker<M, R>
    postMessage(data: M, transferList?: any[]): void
    addEventListener(type: 'message', listener: (event: { data: R }) => void): void
    addEventListener(type: 'error', listener: (event: ErrorEvent) => void): void
    onmessage: (event: { data: R }) => void
    onerror: (event: ErrorEvent) => void
    terminate(): void
}

declare interface IDrawerWorkerContext<M, R> {
    postMessage(data: R, transferList?: any[]): void
    addEventListener(type: 'message', listener: (event: { data: M }) => void): void
    addEventListener(type: 'error', listener: (event: ErrorEvent) => void): void
    onmessage: (event: { data: R }) => void
    onerror: (event: ErrorEvent) => void
}
