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
  const [topArtist, setTopArtist] = useState(null);
  const [timeRange, setTimeRange] = useState("short_term"); 

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
      getTopArtist(timeRange); // Pass the selected time range
    }

    if (tokenFromUrl) {
      window.location.hash = "";
    }
  }, [timeRange]);

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

  const getTopArtist = async () => {
    try {
      const response = await spotifyApi.getMyTopArtists({ limit: 1, time_range: timeRange });
      if (response && response.items && response.items.length > 0) {
        setTopArtist(response.items[0]);
      }
    } catch (error) {
      console.error("Error fetching top artist:", error);
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
      value={{
        spotifyToken,
        setSpotifyToken,
        loggedIn,
        setLoggedIn,
        nowPlaying,
        getNowPlaying,
        userProfile,
        logout,
        topArtist,
        getTopArtist,
        timeRange,
        setTimeRange, // Expose the setter for time range
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
