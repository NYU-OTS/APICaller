import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import integration from '../Integration/IntegrationReducers';

const rootReducer = combineReducers({
    integration
});

const loggerMiddleware = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default store;