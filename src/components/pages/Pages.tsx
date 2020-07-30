import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Loading from '../universal/Loading';

const NoMatch = lazy(() => import('./noMatch/NoMatch'));
const LogIn = lazy(() => import('./login/Login'));

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Suspense>
);

export default Pages;
