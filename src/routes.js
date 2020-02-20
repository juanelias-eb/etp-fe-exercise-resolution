import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ConnectedPage from './containers/connectPage';
import SiteStructure from './containers/SiteStructure';

import ReduxBasic from './components/redux/ReduxBasic';
import connectReduxBasic from './containers/redux/connectReduxBasic';

import Brewery from './components/redux/Brewery';
import connectBrewery from './containers/redux/connectBrewery';

import EdsNotification from './components/eds/EdsNotification';

import EdsActionBar from './components/eds/EdsActionBar';

const BASE_PATH = '/';

const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_PATH);
    };

    return (
        <Route path={BASE_PATH}>
            <IndexRoute component={ConnectedPage} />
            <Route path="exercises" component={SiteStructure}>
                <Route path ="redux-basic" component={connectReduxBasic(ReduxBasic)} />
                <Route path ="redux-thunk" component={connectBrewery(Brewery)} />
                <Route path ="eds-notification" component={EdsNotification} />
                <Route path ="eds-action-bar" component={EdsActionBar} />
            </Route>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

export default getRoutes;