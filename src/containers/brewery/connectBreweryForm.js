import { connect } from 'react-redux';

import { addBrewery } from '../../actions/brewery';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => dispatch(addBrewery(formData)),
});

export default connect(null, mapDispatchToProps);
