import { connect } from 'react-redux';

import { fetchBreweries } from '../../actions/redux';

const mapStateToProps = ({ breweriesReducer }) => {

    return {
        breweryList: breweriesReducer,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onLoadBrewery: (page) => dispatch(fetchBreweries(page)),
});

export default connect(mapStateToProps, mapDispatchToProps);
