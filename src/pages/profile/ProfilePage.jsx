import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ user }) => {
  const history = useNavigate();

  const goToHome = () => {
    history('/tasks');
  };

  const goBack = () => {
    history(-1);
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <button onClick={goToHome}>Tasks</button>
      </div>
    </div>
  );
};

export default ProfilePage;
