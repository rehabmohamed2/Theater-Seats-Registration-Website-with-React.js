import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';

function UserPage() {
  return (
<div style={{  padding: '20px', color: 'white',  }}>
  <h1>Welcome to the User Page</h1>
  <MovieList />
</div>
  );
}

export default UserPage;