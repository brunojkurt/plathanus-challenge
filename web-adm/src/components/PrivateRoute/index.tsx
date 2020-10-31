import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthData } from '../../store/types';

interface TPrivateRoute {
  exact?: boolean;
  path: string;
  auth: AuthData;
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ 
  component: Component,
  auth,
  ...rest
}: TPrivateRoute) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
            pathname: "/login",
            state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;