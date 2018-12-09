import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router, Route } from 'react-router';
import { history } from './history';
import { Sider } from './components/Menu';

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Sider} />
        </Router>
    </Provider>,
    document.getElementById('root')
);