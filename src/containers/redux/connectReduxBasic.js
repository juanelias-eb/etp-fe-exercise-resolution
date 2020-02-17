import { connect } from 'react-redux';

import { setDate } from '../../actions/redux';

const mapStateToProps = ({
    dateReducer,
}) => ({
    currentDate: dateReducer,
});

const mapDispatchToProps = {
    setDate,
};

export default connect(mapStateToProps, mapDispatchToProps);
