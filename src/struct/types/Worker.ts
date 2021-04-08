import { DrawInfo } from './Drawer'
import { FigureImage } from './Figure'

export type DrawerWorkerMessage = OffscreenCanvas | DrawInfo[]
export type DrawerWorkerResult = FigureImage[]
