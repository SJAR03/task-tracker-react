import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const location = useLocation();
  const history = useNavigate();

  console.log('We are in Route: ', location.pathname); // Devuelve la ruta about o faqs

  const goToHome = () => {
    history('/');
  };

  const goBack = () => {
    history(-1);
  };

  return (
    <div>
      <h1>About | FAQs</h1>

      <div>
        <button onClick={goToHome}>Go home</button>
        <button onClick={goBack}>Go back</button>
      </div>
    </div>
  );
};

export default AboutPage;
