import React, { useContext } from "react";

import { SpotifyContext } from "../../SpotifyContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import disc from '../../assets/img/disc_spinning.gif';
import placeholder from '../../assets/img/placeholder.png';

export default function MediaCard() {
  const { loggedIn, nowPlaying, userProfile } = useContext(SpotifyContext);

  if (!loggedIn || !nowPlaying || !nowPlaying.name) return null;

  return (
    <Card
      className="text-center absolute sm:right-8 sm:top-24 right-4 top-20 bg-white lg:max-w-[150px] sm:max-w-[100px] max-w-[50px]"
    >
      <img src={disc} alt="disc" className="absolute sm:top-2 sm:right-2 top-1 right-1 sm:h-6 h-3" />
      <CardMedia>
        <img
          src={nowPlaying.albumArt || placeholder}
          alt={nowPlaying.name || "Unknown Track"}
          className="mx-auto"
        />
      </CardMedia>
      <CardContent class="p-1 pb-2">
        <Typography component="div" class="lg:text-sm sm:text-[12px] text-[6px]">
          <div>{nowPlaying.name || "Unknown Track"}</div>
        </Typography>
        <Typography variant="body2" class="lg:text-[8px] sm:text-[6px] text-[3px]" sx={{ color: "text.secondary" }}>
          <div>{nowPlaying.artist || "Unknown Artist"}</div>
        </Typography>
        {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {userProfile?.id}
        </Typography> */}
      </CardContent>
    </Card>
  );
}