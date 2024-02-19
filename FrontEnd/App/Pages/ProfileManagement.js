import React from 'react';
import LoginSignupButtons from '../components/LoginSignUpButtons';
import Intro from '../components/Description';

const ProfileManagement = () => {
  return (
    <div>
      <h1>Profile Management</h1>
      <Intro />
      <LoginSignupButtons />
    </div>
  );
};

export default ProfileManagement;
