// Do this once before any other code in your app
import 'babel-polyfill';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import SokweAppContainer from './SokweAppContainer';
import HomeLayout from './home/components/HomeLayout';
import AdminLayout from './admin/components/AdminLayout/AdminLayout';
import AboutLayout from './about/components/AboutLayout';

import AnyLoggedInUserLayout from './anyLoggedInUser/components/AnyLoggedInUserLayout';
import IsokoranyeContainer from './isokoranye/containers/IsokoranyeContainer';
import AddIgisokozoFormReactBootstrap from './isokoranye/components/OngeramwoRow/AdminCreateIgisokozoForm/AddIgisokozoFormReactBootstrap';
import store from './store';

import LoginForm from './loginNsignup/components/LoginForm/LoginForm';
import UrlNotFound from './reusableComponents/UrlNotFound/UrlNotFound';
/** This is where it all starts. This main application file includes the React
* Router,primary views, and the router configuration. */
let sokweRoutes = (
  <Route path="/" component={SokweAppContainer}>
    <IndexRoute component={HomeLayout} />
    {/* admin routes */}
    <Route path="admin" component={AdminLayout}>
      <Route path="about" component={AboutLayout} />
      <Route path="users" component={UsersList} />
      <Route path="users/create" component={AddUserForm} />
      <Route path="users/:userId" component={UserDetails} />
      <Route path="users/:userId/edit" component={EditUser} />
      <Route path="ibisokozo" component={IbisokozoLayout} >
        <Route path="newSokozo" component={AdminCreateIgisokozoForm} />
      </Route>
      <Route path="ibisokozo/:sokozoId/edit" component={AdminEditSokozo} />
      <Route path="ibisokozo/:sokozoId/delete" component={ReleaseBacklogLayout} />
    </Route>
    {/* regularUser routes */}
    <Route path="about" component={AboutLayout} />
    <Route path="isokoranye" component={AnyLoggedInUserLayout} >
      <IndexRoute component={IsokoranyeContainer} />
      {/* <Route path="newSokozo" component={AddIgisokozoFormReactBootstrap} /> */}
    </Route>
    {/* account */}
    <Route path="login" component={LoginForm} />
    <Route path="logout" component={HomeLayout} />
    <Route path="*" component={UrlNotFound} />
  </Route>
);
// pass the Router component with some routes to React DOM render method
render(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>{sokweRoutes}</Router>
  </Provider>, document.getElementById('sokweApp'));
