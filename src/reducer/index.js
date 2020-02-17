import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { SET_DATE } from '../actions/redux';

const dateReducer = (state = 'No data', { type, payload }) => {
    let nextState = state;

    if (type === SET_DATE) {
        nextState = payload;
    }

    return nextState;
};

export default combineReducers({
    routing,
    dateReducer,
});
