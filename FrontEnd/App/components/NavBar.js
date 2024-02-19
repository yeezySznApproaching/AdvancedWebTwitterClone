import React from 'react';

const NavBar = ({ navigateTo }) => {
  return (
    <nav>
      <ul>
        <li onClick={() => navigateTo('home')}>Home</li>
        <li onClick={() => navigateTo('userProfile')}>User Profile</li>
        <li onClick={() => navigateTo('profileManagement')}>Manage Profile</li>
        <li onClick={() => navigateTo('search')}>Search</li>
      </ul>
    </nav>
  );
};

export default NavBar;
