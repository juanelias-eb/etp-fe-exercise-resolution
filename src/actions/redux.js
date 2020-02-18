import isEmpty from 'lodash/isEmpty';

import { fetchBreweries as fetchBreweriesApi } from '../api/brewery';
import { transformBreweries } from '../transformations/brewery';

export const SET_DATE = 'SET_DATE';
export const SET_BREWERIES = 'SET_BREWERIES';

export const setDate = () => ({
    type: SET_DATE,
    payload: new Date().toString(),
});

export const setBreweries = (transformedBreweries) => ({
    type: SET_BREWERIES,
    payload: transformedBreweries,
});


export const fetchBreweries = (page = 1) => (dispatch, getState) => {
    const {
        breweriesReducer,
    } = getState();

    if (!isEmpty(breweriesReducer[page])) {
        return Promise.resolve(breweriesReducer[page]);
    }

    return fetchBreweriesApi(page).then(
        (breweryResult) => {
            const transformedBreweries = transformBreweries(breweryResult);

            dispatch(
                setBreweries({[page] : transformedBreweries})
            );
            return transformedBreweries;
        }
    )
};
