import { SET_REDUX_FORM_BASIC_INFO } from '../actions/reduxFormBasic';

export const setReduxFormBasicInfo = (state = {}, { type, payload}) => {
    let nextState = state;

    if (type === SET_REDUX_FORM_BASIC_INFO) {
        nextState = payload;
    }

    return nextState;
};
