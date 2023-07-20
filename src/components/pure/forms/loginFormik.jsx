import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialCredentials = {
  email: '',
  password: '',
};

const LoginFormik = () => {
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // ** Initial values that the form will take
        initialValues={initialCredentials}
        // ** Yup validation schema
        validationSchema={loginSchema}
        // ** onSubmit
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          alert(JSON.stringify(values, null, 2));
          // ** We save the data in the local storage
          localStorage.setItem('credential', values);
        }}>
        {/* We obtain props from formik */}
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            <Form>
              <label htmlFor='firstName'>Email</label>
              <Field
                id='email'
                type='email'
                name='email'
                placeholder='example@gmail.com'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <label htmlFor='password'>Password</label>
              <Field
                id='password'
                name='password'
                placeholder='password'
                type='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {/* Password errors */}
              {errors.password && touched.password && (
                <div className='error'>
                  <p>{errors.password}</p>
                </div>
              )}

              <button type='submit'>Login</button>
              {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
