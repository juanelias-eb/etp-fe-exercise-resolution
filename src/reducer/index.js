import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { SET_DATE, SET_BREWERIES } from '../actions/redux';

const dateReducer = (state = 'No data', { type, payload }) => {
    let nextState = state;

    if (type === SET_DATE) {
        nextState = payload;
    }

    return nextState;
};

const breweriesReducer = (state = {}, { type, payload }) => {
    let nextState = state;

    if (type === SET_BREWERIES) {
        nextState = {
            ...nextState,
            ...payload,
        };
    }

    return nextState;
};

export default combineReducers({
    routing,
    dateReducer,
    breweriesReducer,
});
