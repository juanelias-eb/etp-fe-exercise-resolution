import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchBreweries } from '../../actions/redux';

const mapStateToProps = ({ breweriesReducer }) => {

    return {
        breweryList: breweriesReducer,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onLoadBrewery: (page) => dispatch(fetchBreweries(page)),
    onAddBrewery: () => browserHistory.push('/exercises/brewery/form'),
});

export default connect(mapStateToProps, mapDispatchToProps);
