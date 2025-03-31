import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SpotifyLogin() {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/auth/login');
  };

  return (
    <div>
      <h1 className="text-3xl mx-auto text-center mb-6">Login</h1>
      
      <div className="my-16">
        <a href="http://localhost:8888/" className="hover:underline cursor-pointer text-center text-2xl">
          <p>Log in with Spotify :3</p>
        </a>
      </div>

      <div className="text-center">
        <div className="mb-4">
          <a onClick={goToLogin} className="hover:underline cursor-pointer">
            Log in normally (boring)
          </a>
        </div>
        <a href="https://spotify.com/en/login" className="hover:underline cursor-pointer">
          Don't have a Spotify account? Sign up here :3
        </a>
      </div>
    </div>
  );
}

export default SpotifyLogin;
