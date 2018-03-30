import React from 'react';
// import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// import createBrowserHistory from 'history/createBrowserHistory';
import SokweAppContainer from '../SokweAppContainer';
// import SokweAppLayout from '../SokweAppLayout';
// import HomeLayout from '../home/components/HomeLayout';
// import AdminLayout from '../admin/components/AdminLayout/AdminLayout';
// import AboutLayout from '../about/components/AboutLayout';
// import AnyLoggedInUserLayout from '../anyLoggedInUser/components/AnyLoggedInUserLayout';
// import IsokoranyeContainer from '../isokoranye/containers/IsokoranyeContainer';
// import AddIgisokozoForm from
//  '../isokoranye/components/OngeramwoRow/AddIgisokozoForm/AddIgisokozoForm';


const SokweRoutes = () => {
  return (
    <BrowserRouter>
      <SokweAppContainer />
    </BrowserRouter>
  );
};
export default hot(module)(SokweRoutes);
