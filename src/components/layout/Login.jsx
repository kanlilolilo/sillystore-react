import React, { useContext } from "react";
import { SpotifyContext } from "../../SpotifyContext";
import { useNavigate } from 'react-router-dom';

import user from '../../assets/img/user_img.png';

function Login() {
  const navigate = useNavigate();
  const { loggedIn, userProfile } = useContext(SpotifyContext); // Added userProfile

  const goToSpotifyLogin = () => {
    navigate('/auth/spotifylogin');
  };

  const goToAccount = () => {
    navigate('/profile');
  };

  return (
    <div>
      {loggedIn ? (
        // Show when logged in
        <div onClick={goToAccount}>
          <a className="cursor-pointer flex hover:bg-hoverblue90 rounded-lg transition pl-2 pb-2 mb-1 mt-1">
            <p className="font-bold text-hyperblue mt-3">{userProfile?.display_name || "Username"}</p>
            <img
              className="h-8 mt-2 mx-1 transition rounded-lg"
              src={userProfile?.images?.[0]?.url || user}
              alt="userpfp"
            />
          </a>
        </div>
      ) : (
        // Show when not logged in
        <div onClick={goToSpotifyLogin}>
          <a className="cursor-pointer flex hover:bg-hoverblue90 rounded-lg transition pl-2 pb-2 mb-1 mt-1">
            <p className="font-bold text-hyperblue mt-3">Log In</p>
            <img
              className="h-8 mt-2 mx-1 transition rendering-pixelated"
              src={user}
              alt="user"
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default Login;
