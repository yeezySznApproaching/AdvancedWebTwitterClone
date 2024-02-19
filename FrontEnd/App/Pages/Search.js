import React, { useState } from 'react';
import Intro from '../components/Description';
import LoginSignupButtons from '../components/LoginSignUpButtons';

const Search = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('Login logic goes here');
    setIsLoggedIn(true);
  };

  const handleSignup = () => {
    console.log('Signup logic goes here');
    setIsLoggedIn(true);
  };

  const handleSearch = () => {
    if (isLoggedIn) {
      console.log('Search logic goes here');
    } else {
      alert('Please login or signup in order to search');
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <Intro />
      <LoginSignupButtons onLogin={handleLogin} onSignup={handleSignup} />
      <button onClick={handleSearch}>Search for a user</button>
    </div>
  );
};

export default Search;
