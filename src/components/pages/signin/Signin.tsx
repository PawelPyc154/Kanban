import styled from 'styled-components';
import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch, useSelector } from 'react-redux';
import media from '../../../utils/MediaQueries';
import GoogleButton from '../../universal/GoogleButton';
import { AppState } from '../../../state/allReducers';
import { setRegister } from '../../../state/auth/action';

interface Data {
  email: string;
  name: string;
  password: string;
}
const schema = yup.object({
  email: yup.string().email('Invalid email!').required('Email is required!'),
  name: yup.string().required('Name is required!'),
  password: yup.string().required('Password is required!').min(6, 'Too short!'),
});

export interface SigninProps {}

const Signin: React.FC<SigninProps> = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: AppState) => state.AuthReducer);
  const { register, handleSubmit, errors, setError } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ email, name, password }: Data) => {
    await dispatch(setRegister(name, email, password));
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
  return (
    <main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email" className={errors.email && 'error'}>
          {errors.email ? errors.email.message : 'Email'}
        </Label>
        <Input name="email" id="email" type="text" ref={register} />
        <Label htmlFor="name" className={errors.name && 'error'}>
          {errors.name ? errors.name.message : 'Name'}
        </Label>
        <Input name="name" id="name" type="text" ref={register} />
        <Label htmlFor="password" className={errors.password && 'error'}>
          {errors.password ? errors.password.message : 'Password'}
        </Label>
        <Input name="password" id="password" type="password" ref={register} />
        <Submit type="submit" />
        <GoogleButton />
      </Form>
    </main>
  );
};
export default Signin;

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
const Submit = styled.input`
  height: 40px;
  margin: 10px 0 20px 0;
  font-size: 30px;
  background-color: gray;
  border: none;
  cursor: pointer;
`;
