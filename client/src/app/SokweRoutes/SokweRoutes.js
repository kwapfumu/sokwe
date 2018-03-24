import React from 'react';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// import SokweAppContainer from '../SokweAppContainer';
import HomeLayout from '../home/components/HomeLayout';
// import AdminLayout from '../admin/components/AdminLayout/AdminLayout';
// import AboutLayout from '../about/components/AboutLayout';
// import AnyLoggedInUserLayout from '../anyLoggedInUser/components/AnyLoggedInUserLayout';
// import IsokoranyeContainer from '../isokoranye/containers/IsokoranyeContainer';
// import AddIgisokozoForm from
//  '../isokoranye/components/OngeramwoRow/AddIgisokozoForm/AddIgisokozoForm';
// import LoginForm from '../loginNsignup/components/LoginForm/LoginForm';
import UrlNotFound from '../reusableComponents/UrlNotFound/UrlNotFound';

const SokweRoutes = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={HomeLayout} />
        {/* <Route exact path="/" component={SokweAppContainer}>
        <IndexRoute component={HomeLayout} /> */}
        {/* admin routes */}
        {/* <Route path="admin" component={AdminLayout}>
          <Route path="about" component={AboutLayout} />
          <Route path="users" component={UsersList} />
          <Route path="users/create" component={AddUserForm} />
          <Route path="users/:userId" component={UserDetails} />
          <Route path="users/:userId/edit" component={EditUser} />
          <Route path="ibisokozo" component={IbisokozoLayout} >
            <Route path="newSokozo" component={AddIgisokozoForm} />
          </Route>
          <Route path="ibisokozo/:sokozoId/edit" component={AdminEditSokozo} />
          <Route path="ibisokozo/:sokozoId/delete" component={IbisokozoLayout} />
        </Route> */}
        {/* regularUser routes */}
        {/* <Route path="/about" component={AboutLayout} />
       <Route path="/isokoranye" component={AnyLoggedInUserLayout} >
      <IndexRoute component={IsokoranyeContainer} />
           <Route path="newSokozo" component={AddIgisokozoForm} />
        </Route> */}
        {/* account */}
        {/* <Route path="/login" component={LoginForm} />
        <Route path="/logout" component={HomeLayout} /> */}
        <Route path="/*" component={UrlNotFound} />
        {/* </Route> */}
      </Switch>
    </Router>
  );
};

export default SokweRoutes;
