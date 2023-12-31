import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ! Importar los estilos propios, deben de ir debajo de bootstrap, sino no se aplican los estilos de bootstrap.

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRouting from './AppRouting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppRouting />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
