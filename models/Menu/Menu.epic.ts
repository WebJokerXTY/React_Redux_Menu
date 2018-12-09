import { Epic, ofType } from 'redux-observable';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { Http } from '../../modules/Http';
import { menuResponse } from './Menu.action';
import * as constant from './Menu.constant';

export const MenuEpic: Epic = action$ => action$.pipe(
    ofType(constant.MENU_REQUEST),
    debounceTime(200),
    switchMap(() => Http.get('/menu').pipe(
        map(menuResponse)
    ))
);