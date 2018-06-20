import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import rootReducer from '../reducers';
import rootEpic from '../epics';
import ajaxSetup from '../ajax';

export const history = createHistory();

const initialState = {};

const enhancers = [];
const middleware = [
    routerMiddleware(history),
    createEpicMiddleware(rootEpic, {
        dependencies: {
            
        },
    }),
];

if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
);

ajaxSetup(store);

export default store;
