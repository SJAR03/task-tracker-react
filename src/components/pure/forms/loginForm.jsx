/**
 * Componente que va a contener un formulario
 * para autentificación de usuarios
 */

import React, { useState } from 'react';

const LoginForm = () => {
  const initialCredentials = [
    {
      user: '',
      pwd: '',
    },
  ];

  const [credentials, setCredentials] = useState(initialCredentials);

  return <div></div>;
};

export default LoginForm;
