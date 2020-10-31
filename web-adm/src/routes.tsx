import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as authActions from './store/actions/auth';

import { ApplicationState, AuthData } from './store/types';

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routes = ({ auth }: { auth: AuthData }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={ Login } />
        <PrivateRoute path="/dashboard" component={ Dashboard } auth={auth}/>
        <Route path="*" component={ () => { return ( <h1>404 Not Found</h1> )}} />
      </Switch>
    </BrowserRouter>
  )
};

const mapStateToProps = (state: ApplicationState) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(authActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Routes);