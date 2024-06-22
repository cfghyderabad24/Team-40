import React from 'react';

const HomeScreen = ({ adminName }) => {
  return (
    <div>
      <h1>Welcome, {adminName}!</h1>
      <p>This is the home screen.</p>
    </div>
  );
};

export default HomeScreen;
