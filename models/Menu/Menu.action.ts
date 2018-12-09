import * as constant from './Menu.constant';
import { createActions } from 'redux-actions';

export const { menuRequest, menuResponse } = createActions(
    {
        [constant.MENU_REQUEST]: payload => payload,
        [constant.MENU_RESPONSE]: payload => payload
    }
)