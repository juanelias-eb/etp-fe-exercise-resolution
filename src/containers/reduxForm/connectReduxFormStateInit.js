import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';

const mapStateToProps = (
    {
        reduxBasicFormData
    }
) => ({
    reduxBasicFormData,
    initialValues: {
        firstField: 'First Value',
        secondField: 'second',
        thirdField: 'first',
        '5Field': 'Last value',
    },
} );

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
