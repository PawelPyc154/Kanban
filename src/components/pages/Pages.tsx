import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Loading from '../universal/Loading';
import PrivateRoute from '../universal/PrivateRoute';

const NoMatch = lazy(() => import('./noMatch/NoMatch'));
const LogIn = lazy(() => import('./login/Login'));
const Signin = lazy(() => import('./signin/Signin'));
const MyBoards = lazy(() => import('./myBoards/MyBoards'));

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/login" component={LogIn} />
      <Route path="/signin" component={Signin} />
      <PrivateRoute path="/my-boards" component={MyBoards} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Suspense>
);

export default Pages;
