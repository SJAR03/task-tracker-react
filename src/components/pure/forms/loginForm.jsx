/**
 * Componente que va a contener un formulario 
 * para autentificación de usuarios
 */

import React, { useState } from 'react'

const loginForm = () => {

    const initialCredentials = [
        {
            user: '',
            pwd: '',
        }
    ];

    const [credentials, setCredentials] = useState(initialCredentials)

  return (
    <div>
      
    </div>
  )
}

export default loginForm
