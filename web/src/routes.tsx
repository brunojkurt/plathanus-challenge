import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Welcome } />
        <Route path="*" component={ () => { return ( <h1>404 Not Found</h1> )}} />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;