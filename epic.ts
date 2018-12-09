import { combineEpics } from 'redux-observable';
import { MenuEpic } from './models/Menu';

export const rootEpic = combineEpics(MenuEpic);