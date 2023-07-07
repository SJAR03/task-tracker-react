import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para usuario legueado
const loggedStyle = {
  color: 'white',
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  fontWeight: 'bold',
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
  color: 'white',
  backgroundColor: 'tomato',
  fontWeight: 'bold',
};

// Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>
      Logout
    </button>
  );
};

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => se renderiza la expresión

const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [Nmessages, setNmessages] = useState(0);

  //   const updateAccess = () => {
  //     setAccess(!access);
  //   };

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };

  let optionalButton;

  //   if (access) {
  //     optionalButton = <button onClick={updateAccess}>Logout</button>;
  //   } else {
  //     optionalButton = <button onClick={updateAccess}>Login</button>;
  //   }

  if (access) {
    optionalButton = (
      <LogoutButton
        propStyle={unloggedStyle}
        logoutAction={logoutAction}></LogoutButton>
    );
  } else {
    optionalButton = (
      <LoginButton
        propStyle={loggedStyle}
        loginAction={loginAction}></LoginButton>
    );
  }

  // unread messages
  let addMessages = () => {
    setNmessages(Nmessages + 1);
  };

  return (
    <div>
      {/* Optional button */}
      {optionalButton}
      {/* N messages unread */}
      {/* {Nmessages > 1 && <p>You have {Nmessages} new messages...</p>}
      {Nmessages === 1 && <p>You have {Nmessages} new message...</p>}
      {Nmessages === 0 && <p>There are no new messages</p>} */}

      {/* Ternay Operator */}
      {access ? (
        <di>
          {Nmessages > 0 ? (
            <p>
              You have {Nmessages} new message{Nmessages > 1 ? 's' : null}...
            </p>
          ) : (
            <p>There are no new messages</p>
          )}

          <button onClick={addMessages} className='btn btn-primary'>
            {Nmessages === 0 ? 'Add your first message' : 'Add new message'}
          </button>
        </di>
      ) : null}
    </div>
  );
};

export default OptionalRender;
