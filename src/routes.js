import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ConnectedPage from './containers/connectPage';
import SiteStructure from './containers/SiteStructure';
import ReduxBasic from './components/redux/ReduxBasic';
import connectReduxBasic from './containers/redux/connectReduxBasic';

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
            </Route>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

export default getRoutes;