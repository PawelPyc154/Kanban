import styled from 'styled-components';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import media from '../../../utils/MediaQueries';
import GoogleButton from '../../universal/GoogleButton';
import { AppState } from '../../../state/allReducers';
import { setLogin } from '../../../state/auth/action';

interface Data {
  email: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().email('Invalid email!').required('Email is required!'),
  password: yup.string().required('Password is required!').min(6, 'Too short!'),
});

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: AppState) => state.AuthReducer);
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ email, password }: Data) => {
    await dispatch(setLogin(email, password));
  };

  useEffect(() => {
    // handle error from server
    if (error && typeof error !== 'string') {
      Object.entries(error).forEach(([key, value]) => {
        setError(key, {
          type: 'manual',
          message: value,
        });
      });
    }
  }, [error, setError]);

  const history = useHistory();
  const { user } = useSelector((state: AppState) => state.AuthReducer);
  useEffect(() => {
    if (user) {
      history.push('/my-boards');
    }
  }, [user, history]);

  return (
    <main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email" className={errors.email && 'error'}>
          {errors.email?.message || 'Email'}
        </Label>
        <Input name="email" id="email" type="text" ref={register} />
        <Label htmlFor="password" className={errors.password && 'error'}>
          {errors.password?.message || 'Password'}
        </Label>
        <Input name="password" id="password" type="password" ref={register} />
        <Button type="submit">LogIn</Button>
        <GoogleButton />
      </Form>
    </main>
  );
};
export default Login;

const Form = styled.form`
  width: auto;
  max-width: 400px;
  margin: auto;
  padding: 200px 3px;
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) {
    padding-top: 50px;
  }
  ${media.tablet} {
    padding: 200px 3px;
  }
`;
const Input = styled.input`
  height: 40px;
  margin: 5px 0 20px 0;
  font-size: 25px;
  border: none;
  padding: 5px;
`;
const Label = styled.label`
  font-size: 20px;
  &.error {
    color: red;
  }
`;
const Button = styled.button`
  height: 40px;
  margin: 10px 0 20px 0;
  font-size: 30px;
  background-color: gray;
  border: none;
  cursor: pointer;
`;
