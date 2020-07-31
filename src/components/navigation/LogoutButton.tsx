import React from 'react';
import { useDispatch } from 'react-redux';
import { setLogOut } from '../../state/auth/action';

export interface LogoutButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLogOut());
  };
  return (
    <button type="button" onClick={() => handleClick()}>
      Logout
    </button>
  );
};

export default LogoutButton;
