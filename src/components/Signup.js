import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as yup from 'yup';

export const Signup = () => {
  
  const validate=yup.object().shape(
    {
      firstName:yup.string().max(15,"Must be 15 characters or less").required("you need to fill this area"),
      lastName:yup.string().max(15,"Must be 15 characters or less").required("you need to fill this area"),
      email:yup.string().email("email is ,nvalis").required("you need to fill this area"),
      password:yup.string().min(6,"Password must be atb least 6 character").required("yrquired"),
      confirmPassword:yup.string().oneOf([yup.ref('password'),null],'Password must match').required("re"),
    }
  )
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Lasr Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="emaşl" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            <button className="btn btn-dark mt-3">Register</button>
            <button className="btn btn-danger mt-3 ms-3" type="reset">
              Cancel
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
