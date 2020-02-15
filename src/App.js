import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { configureStore } from 'js-utils/redux';
import { getHistory, updateHistory } from 'js-utils/router';

import reducer from './reducer';
import { getInitialState } from './reducer/utils';
import getRoutes from './routes';

import 'eventbrite_design_system/css/eds.css';

export default class App extends Component {
    history = getHistory();
    store = configureStore({
        reducer,
        initialState: getInitialState(),
        middleware: [thunk, routerMiddleware(this.history)],
    });
    history = syncHistoryWithStore(this.history, this.store);
  
    render() {
      return (
        <Provider store={this.store}>
          <Router history={this.history} routes={getRoutes()} />
        </Provider>
      );
    }
}