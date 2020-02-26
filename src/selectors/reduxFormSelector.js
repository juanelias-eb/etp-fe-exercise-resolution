import { formValueSelector } from 'redux-form';
import isArray from 'lodash/isArray';

const fieldValueSelector = formValueSelector('reduxFormBasic');

export const getFieldValue = (state, fieldNames) => (
    fieldValueSelector(state, ...isArray(fieldNames) ? fieldNames : [fieldNames])
);
