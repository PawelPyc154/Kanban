import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import NoMatch from './noMatch/NoMatch';
import Loading from '../universal/Loading';
// const LoginSignup = React.lazy(() => import('./loginSignup/LoginSignup'));

export interface PagesProps {}

const Pages: React.FC<PagesProps> = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Suspense>
);

export default Pages;
