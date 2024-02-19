import React from 'react';
import PostForm from '../components/PostForm';
import Feed from '../components/Feed';

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <PostForm />
      <Feed />
    </div>
  );
};

export default UserProfile;
