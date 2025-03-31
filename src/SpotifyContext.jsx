import React, { createContext, useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();
export const SpotifyContext = createContext();

const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const SpotifyProvider = ({ children }) => {
  const [spotifyToken, setSpotifyToken] = useState(null);
  const [nowPlaying, setNowPlaying] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const tokenFromUrl = getTokenFromUrl().access_token;
    const tokenFromStorage = localStorage.getItem("spotifyToken");
    const token = tokenFromUrl || tokenFromStorage;

    if (token) {
      setSpotifyToken(token);
      spotifyApi.setAccessToken(token);
      localStorage.setItem("spotifyToken", token);

      // Validate token
      validateToken(token);
    }

    if (tokenFromUrl) {
      window.location.hash = "";
    }
  }, []);

  const validateToken = async (token) => {
    try {
      const user = await spotifyApi.getMe();
      setUserProfile(user);
      setLoggedIn(true);
      getNowPlaying();
    } catch (error) {
      console.error("Token expired or invalid:", error);
      logout();
    }
  };

  const getNowPlaying = async () => {
    try {
      const response = await spotifyApi.getMyCurrentPlaybackState();
      if (response && response.item) {
        setNowPlaying({
          name: response.item.name,
          albumArt: response.item.album.images[0].url,
          artist: response.item.artists[0].name,
        });
      }
    } catch (error) {
      console.error("Error fetching now playing:", error);
    }
  };

  const logout = () => {
    setSpotifyToken(null);
    setLoggedIn(false);
    setUserProfile(null);
    localStorage.removeItem("spotifyToken");
    spotifyApi.setAccessToken(null);
  };

  return (
    <SpotifyContext.Provider
      value={{ spotifyToken, setSpotifyToken, loggedIn, setLoggedIn, nowPlaying, getNowPlaying, userProfile, logout }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
