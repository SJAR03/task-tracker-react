import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// models
import { user } from '../../../models/user.class';
import { roles } from '../../../models/roles.enum';

const RegisterFormik = () => {
  let User = new user();

  const initialValues = {
    username: '',
    email: '',
    pwd: '',
    confirm: '',
    rol: roles.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, 'Username too short')
      .max(12, 'Username too long')
      .required('Username is required'),

    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    pwd: Yup.string()
      .min(8, 'Password too short')
      .required('Password is required'),
    confirm: Yup.string()
      .when('password', {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref('password')], 'Password must match'),
      })
      .required('You must confirm the password'),
    rol: Yup.string()
      .oneOf([roles.USER, roles.ADMIN], 'You must select a role: User / Admin')
      .required('Rol is required'),
  });

  const submit = (values) => {
    alert('Register user');
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        // * Initial values that form will take
        initialValues={initialValues}
        // * Yup validation schema
        validationSchema={registerSchema}
        // ** onSubmit
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          alert(JSON.stringify(values, null, 2));
        }}>
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => {
          return (
            <Form>
              <label htmlFor='username'>Username</label>
              <Field
                id='username'
                name='username'
                type='user'
                placeholder='Your username'
              />

              {/* Username errors */}
              {errors.username && touched.username && (
                <ErrorMessage name='username' component='div'></ErrorMessage>
              )}

              <label htmlFor='email'>Email</label>
              <Field
                id='email'
                name='email'
                type='email'
                placeholder='example@gmail.com'
              />

              {/* Email errors */}
              {errors.email && touched.email && (
                <ErrorMessage name='email' component='div'></ErrorMessage>
              )}

              <label htmlFor='pwd'>Password</label>
              <Field
                id='pwd'
                name='pwd'
                placeholder='Password'
                type='password'
              />

              {/* Password errors */}
              {errors.pwd && touched.pwd && (
                <ErrorMessage name='pwd' component='div'></ErrorMessage>
              )}

              <label htmlFor='confirm'>Password</label>
              <Field
                id='confirm'
                name='confirm'
                placeholder='Confirm password'
                type='password'
              />

              {/* Confirm password errors */}
              {errors.confirm && touched.confirm && (
                <ErrorMessage name='confirm' component='div'></ErrorMessage>
              )}

              <button type='submit'>Register account</button>
              {isSubmitting ? <p>Sending your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
