export type Raidus = number | { x: number; y: number }
export type ImageInfo = {
    type: string // 图形类型
    width: number // 图片宽度
    height: number // 图片高度
    borderColor?: string // 边框颜色
    borderWidth?: number // 边框宽度
    borderStyle?: string // 边框样式，实线、虚线
    backgroundColor?: string // 背景颜色
    paths?: string[] // 绘制路径
    raduis?: Raidus // 绘制圆或椭圆-半径
}
