import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import { initialize } from 'redux-form';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';

const mapStateToProps = (
    {
        reduxBasicFormData
    }
) => ({
    reduxBasicFormData,
} );

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => dispatch(saveReduxFormBasicData(formData)),
    onLoad: () => dispatch(
        initialize(
            'reduxFormBasic',
            {
                firstField: 'First Value',
                secondField: 'second',
                thirdField: 'first',
                '5Field': 'Last value',
            }
        )
    ),
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
