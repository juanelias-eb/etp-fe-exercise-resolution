import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';
import { getFieldValue } from '../../selectors/reduxFormSelector';

const FORM_VALUE_MAPS = {
    'firstField': 'firstField',
    'secondField': 'secondField',
    'thirdField': 'thirdField',
    '5Field': '5Field',
};

const mapStateToProps = (state) => {
    const selectedValue = getFieldValue(state, 'selector');
    let reduxBasicFormData = null;

    if (selectedValue) {
        reduxBasicFormData = getFieldValue(state, FORM_VALUE_MAPS[selectedValue] || Object.keys(FORM_VALUE_MAPS));
    }

    return {
        reduxBasicFormData,
        isFormSelector: true,
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => dispatch(saveReduxFormBasicData(formData)),
});

export default flowRight(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withReduxForm({
        form: 'reduxFormBasic',
    }),
)(ReduxFormBasic);
