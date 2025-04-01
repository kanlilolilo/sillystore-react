import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotifyContext } from '../SpotifyContext';
import styles from './Styles.module.css';
import cart from '../assets/img/cart_img_white.png';
import cartGif from '../assets/img/cart_img_white_hover.gif';

function ArtistProduct() {
  const { topArtist, loggedIn } = useContext(SpotifyContext);

  if (!loggedIn) {
    return null; // Do not render if not logged in
  }

  return (
    <div className={`${styles.artistproduct} single-product cursor-pointer w-[240px] h-[240px] flex rounded-3xl mx-auto drop-shadow-lg -z-10`}>
      <div className={`${styles.pixeltextbox} w-[220px] h-10 mt-auto rendering-pixelated`}>
        <h1 className=" text-lg mt-[4.5px] px-4 max-w-[196px] truncate cursor-default">
          {topArtist ? `${topArtist.name}'s super mooie tshirt` : 'Loading...'}
        </h1>
        <div className={`${styles.pixelcircle} w-16 h-16 -mr-[28px] pt-3.5 pl-3 -mt-[56.5px] ml-auto cursor-pointer rendering-pixelated`}>
          <img 
            src={cart} className="h-9 w-9 rendering-pixelated"
            onMouseEnter={(e) => e.currentTarget.src = cartGif}
            onMouseLeave={(e) => e.currentTarget.src = cart}
          >
          </img>
        </div>
      </div>
      {topArtist && (
        <h1 className="text-[#00FF19] absolute top-0 right-0 text-2xl drop-shadow-[0_2px_2px_rgba(0.8,0.8,0.8,0.8)]">
          € {topArtist.popularity}
        </h1>
      )}
      {topArtist && topArtist.images?.[0]?.url && (
        <img 
          src={topArtist.images[0].url} 
          alt="Top Artist" 
          className="w-12 h-12 absolute top-[90px] left-[90px]" 
        />
      )}
    </div>
  );
}

export default ArtistProduct;


