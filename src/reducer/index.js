import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {reducer as formReducer } from 'redux-form';

import { SET_DATE, SET_BREWERIES } from '../actions/redux';

import { setReduxFormBasicInfo as reduxBasicFormData } from './reduxFormBasic';

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
    reduxBasicFormData,
    form: formReducer,
});
