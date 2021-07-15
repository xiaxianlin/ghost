import { TDrawer } from './DrawerDeclare';

export interface IShape {
    getDrawInfo(): TDrawer
}

export interface IRect extends IShape {}

export interface ILine extends IShape {}
