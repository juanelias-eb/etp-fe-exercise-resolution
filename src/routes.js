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
import EdsDialog from './components/eds/EdsDialog';
import EdsModalWithNotification from './components/eds/EdsModalWithNotification';

import EdsFocusDrawer from './components/eds/EdsFocusDrawer';
import EdsFocusDrawerComponent from './components/eds/EdsFocusDrawerComponent';
import { assembleComponentWithFocusDrawer } from './utils';

const BASE_PATH = '/';

const edsFocusDrawerExercise = assembleComponentWithFocusDrawer('Focus Drawer', EdsFocusDrawerComponent, EdsFocusDrawer);

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
                <Route path ="eds-dialog" component={EdsDialog} />
                <Route path ="eds-modal" component={EdsModalWithNotification} />
                <Route path ="eds-focus-drawer" component={EdsFocusDrawer} />
                <Route path ="eds-focus-component" components={edsFocusDrawerExercise} />
            </Route>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

export default getRoutes;