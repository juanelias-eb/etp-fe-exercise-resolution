import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchBreweries } from '../../actions/redux';
import { setTabs } from '../../actions/brewery';

const mapStateToProps = ({ breweriesReducer, customBreweriresReducer, breweryTabIndex }) => {

    return {
        breweryList: breweriesReducer,
        customBreweryList: customBreweriresReducer,
        breweryTabIndex,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onLoadBrewery: (page) => dispatch(fetchBreweries(page)),
    onAddBrewery: () => browserHistory.push('/exercises/brewery/form'),
    setBreweryTab: (index) => dispatch(setTabs(index)),
});

export default connect(mapStateToProps, mapDispatchToProps);
