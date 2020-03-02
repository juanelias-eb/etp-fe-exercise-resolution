import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {reducer as formReducer } from 'redux-form';

import { SET_DATE, SET_BREWERIES } from '../actions/redux';
import { SET_OWN_BREWERIES, SET_BREWERY_TAB } from '../actions/brewery';

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

const customBreweriresReducer = (state = [], { type, payload }) => {
    let nextState = state;

    if (type === SET_OWN_BREWERIES) {
        nextState = [...nextState, payload];
    }

    return nextState;
};

const breweryTabIndex = (state = 0, { type, payload }) => {
    let nextState = state;

    if (type === SET_BREWERY_TAB) {
        nextState = payload;
    }

    return nextState;
};


export default combineReducers({
    routing,
    dateReducer,
    breweriesReducer,
    reduxBasicFormData,
    customBreweriresReducer,
    breweryTabIndex,
    form: formReducer,
});
