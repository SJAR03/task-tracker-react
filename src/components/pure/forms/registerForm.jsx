import React, { useState } from 'react';

const RegisterForm = () => {
  const initialData = [
    {
      user: '',
      name: '',
      pwd: '',
      email: '',
    },
  ];

  const [data, setData] = useState(initialData);

  return <div></div>;
};

export default RegisterForm;
