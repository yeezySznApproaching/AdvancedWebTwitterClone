import React from 'react';

const LoginSignupButtons = () => {
  return (
    <div>
      <button onClick={() => console.log('Login clicked')}>Login to Twitter</button>
      <button onClick={() => console.log('Signup clicked')}>Signup to Twitter</button>
    </div>
  );
};

export default LoginSignupButtons;
