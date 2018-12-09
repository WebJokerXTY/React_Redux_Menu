import * as constant from './Menu.constant';
import * as action from './Menu.action';
import { IMenuDepartment } from '../server';

export class MenuState {
    departments?: IMenuDepartment[] = [];
    administrator?: boolean = false;
    action?= { ...action };
}

export interface MenuAction {
    type: keyof typeof constant
    payload: MenuState
}