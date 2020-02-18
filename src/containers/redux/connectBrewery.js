import { connect } from 'react-redux';

import { fetchBreweries } from '../../actions/redux';

const mapStateToProps = ({ breweriesReducer }) => {

    return {
        breweryList: breweriesReducer,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onLoadBrewery: () => dispatch(fetchBreweries()),
});

export default connect(mapStateToProps, mapDispatchToProps);
