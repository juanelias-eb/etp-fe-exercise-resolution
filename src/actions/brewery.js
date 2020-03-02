import { SubmissionError } from 'redux-form';

export const SET_OWN_BREWERIES = 'SET_OWN_BREWERIES';
export const SET_BREWERY_TAB = 'SET_BREWERY_TAB';

const setCustomBrewery = (brewery) => ({
    type: SET_OWN_BREWERIES,
    payload: brewery
});

const setBreweryTab = (brewery) => ({
    type: SET_BREWERY_TAB,
    payload: brewery
});

export const addBrewery = (brewery) => (dispatch, getState) => {
    const {
        customBreweriresReducer,
    } = getState();

    if (!customBreweriresReducer.find(({ name }) => brewery.name === name)) {
        dispatch(setCustomBrewery({
            ...brewery,
            id: new Date().getTime(),
            logoUrl: `https://i.picsum.photos/id/${customBreweriresReducer.length + 1}/200/300.jpg`
        }));
        return Promise.resolve();
    }
    throw new SubmissionError({name: 'Duplicated'});
};

export const setTabs = (tabIndex) => (dispatch) => (
    dispatch(setBreweryTab(tabIndex))
)