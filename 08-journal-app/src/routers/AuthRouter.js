import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
  return (
      <div>
          <Switch>
              <Route
                exact
                path="/auth/login"
                component={LoginScreen}>

              </Route>
              <Route
                exact
                path="/auth/register"
                component={RegisterScreen}>

              </Route>
              <Redirect to="/auth/login"/>

          </Switch>
      </div>
  );
};