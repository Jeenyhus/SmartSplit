import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div>
      <h1>Welcome to SmartSplit</h1>
      <Link to="/create">Create a Bill</Link>
      <Link to="/join">Join a Bill</Link>
    </div>
  );
}

export default HomeScreen;