import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { AppState } from '../../state/allReducers';
import { MyBoardsProps } from '../pages/myBoards/MyBoards';

type PrivateComponent = MyBoardsProps;

export interface PrivateRouteProps {
  path: string;
  component: React.LazyExoticComponent<React.FC<PrivateComponent>>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state: AppState) => state.AuthReducer);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
