import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SpotifyContext } from "../../SpotifyContext";

function Logout() {
  const navigate = useNavigate();
  const { setSpotifyToken, setLoggedIn } = useContext(SpotifyContext);

  useEffect(() => {
    if (setSpotifyToken && setLoggedIn) {
      setSpotifyToken(null);
      setLoggedIn(false);
      localStorage.removeItem("spotifyToken");

      navigate("/");
    }
  }, [navigate, setSpotifyToken, setLoggedIn]);

  return <p>Logging out...</p>;
}

export default Logout;
