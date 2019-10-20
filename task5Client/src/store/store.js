import { createStore, applyMiddleware } from 'redux';
import { allReducers } from "./reducer";
import thunk from 'redux-thunk';

const getActions = store => next => action => {
    console.log(action);
    return next(action);
}

export const store = createStore(allReducers, applyMiddleware(getActions, thunk));
