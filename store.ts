import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epic';
import { rootReducer } from './reducer';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from './history';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers =
    typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        epicMiddleware),
);

export const store = createStore(
    connectRouter(history)(rootReducer), enhancer);

epicMiddleware.run(rootEpic);