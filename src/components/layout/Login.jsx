import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

import user from '../../assets/img/user_img.png';

function Login() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/auth/login');
  };

  return (
    <div onClick={goToLogin}>
      <a className="cursor-pointer flex hover:bg-hoverblue90 rounded-lg transition pl-2 pb-2 mb-1 mt-1">
        <p className={`font-bold text-hyperblue mt-3`}>Log In</p>
        <img
          className="h-8 mt-2 mx-1 transition rendering-pixelated"
          src={user}
          alt="user"
        />
      </a>
    </div>
  );
}

export default Login;
