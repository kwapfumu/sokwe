import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// import createBrowserHistory from 'history/createBrowserHistory';
// import SokweAppContainer from '../SokweAppContainer';
import SokweAppLayout from '../SokweAppLayout';

const SokweRoutes = () => {
  return (
    <BrowserRouter>
      <SokweAppLayout />
      {/* <SokweAppContainer /> */}
    </BrowserRouter>
  );
};
export default hot(module)(SokweRoutes);
