import { handleActions } from 'redux-actions';
import { MenuState, MenuAction } from './Menu.type';
import * as constant from './menu.constant';
import * as action from './menu.action';

export const MenuReducer = handleActions(
    {
        [constant.MENU_RESPONSE]: (state: MenuState, action: MenuAction) => {
            console.log(state, action);
            return ({ ...state, ...action.payload })
        }
    }, { action: { ...action } }
)