// Do this once before any other code in your app
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
// import store from './store';
import SokweRoutes from './SokweRoutes/SokweRoutes';

// pass the Router component with some routes to React DOM render method
// render(<Provider store={store}>
// <Router history={createBrowserHistory()}>
// <SokweRoutes />
//   </Router>
// </Provider>, document.getElementById('sokweApp'));

render(<SokweRoutes />, document.getElementById('sokweApp'));
