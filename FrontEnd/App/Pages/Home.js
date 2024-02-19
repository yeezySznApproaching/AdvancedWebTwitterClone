import React from 'react';
import Intro from '../components/Description';
import LoginSignupButtons from '../components/LoginSignUpButtons';
import PostForm from '../components/PostForm';
import Feed from '../components/Feed';

const Home = () => {
  return (
    <div>
      <Intro />
      <LoginSignupButtons />
      <PostForm />
      <Feed />
    </div>
  );
};

export default Home;
