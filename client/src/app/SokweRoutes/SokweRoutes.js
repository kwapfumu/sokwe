import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SokweAppContainer from './SokweAppContainer';
import HomeLayout from './home/components/HomeLayout';
import AdminLayout from './admin/components/AdminLayout/AdminLayout';
import AboutLayout from './about/components/AboutLayout';
import AnyLoggedInUserLayout from './anyLoggedInUser/components/AnyLoggedInUserLayout';
import IsokoranyeContainer from './isokoranye/containers/IsokoranyeContainer';
import AddIgisokozoFormReactBootstrap from './isokoranye/components/OngeramwoRow/AdminCreateIgisokozoForm/AddIgisokozoFormReactBootstrap';
import LoginForm from './loginNsignup/components/LoginForm/LoginForm';
import UrlNotFound from './reusableComponents/UrlNotFound/UrlNotFound';

const sokweRoutes = () => {
  return (
      <Switch>
        <Route exact path="/" component={SokweAppContainer}>
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
      </Switch>
    </Router>
  );
};
