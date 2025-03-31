import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import HamburgerMenu from './HamburgerMenu';
import Dropdown from './Dropdown';
import Login from './Login';

import logo from '../../assets/img/logo_large.png';
import logosmall from '../../assets/img/logo_small.png';

import heart from '../../assets/img/heart_img.png';
import heartFull from '../../assets/img/heart_full_img.png';

import cart from '../../assets/img/cart_img_blue.png';
import cartGif from '../../assets/img/cart_img_blue_hover.gif';

import searchIcon from '../../assets/img/search.png';

import SpotifyCard from '../cards/SpotifyCard';

function Header() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };
  
  const goToWishlist = () => {
    navigate('/wishlist');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="z-20 sticky top-0">
      <div className={`flex w-full h-[28px] bg-basiccyan text-white text-sm overflow-hidden`}>
        <div className={`${styles.animatescroll}`}>
          <p className="mt-0.5 mx-auto my-auto mb-[6px] whitespace-nowrap font-white">Products may ship (they won't :3)</p>
        </div>
      </div>
      <div className={`flex w-full h-16 px-6 bg-hoverblue border-b-8 border-borderblue drop-shadow-xl max-lg:px-[0px] ${styles.banner}`}>
        <a onClick={goHome} class="flex my-auto">
          <img className="h-12 mr-4 hover:bg-hoverblue90 rounded-lg transition cursor-pointer rendering-pixelated hidden xl:block" src={logo} alt="Logo" />
        </a>
        <HamburgerMenu />
        <a onClick={goHome} class="flex my-auto">
          <img className="h-12 lg:mr-2 max-lg:ml-1 max-lg:my-1 p-1 hover:bg-hoverblue90 rounded-lg transition cursor-pointer rendering-pixelated xl:hidden max-sm:hidden min-w-12" src={logosmall} alt="Logosmall" />
        </a>
        
        <div className="max-lg:hidden">
          <Dropdown />
        </div>

        <div className="flex flex-grow justify-end my-auto max-lg:hidden">
          <Login />
        </div>
        
        {/* Search input with icon */}
        <div className="relative mx-3 my-auto w-[320px] max-lg:w-full">
          <input 
            placeholder="Search..." 
            className={`h-10 min-h-14 my-auto p-3 text-xl w-[320px] max-lg:w-full ${styles.searchinput}`}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2" type="button">
            <img src={searchIcon} alt="search" className="h-6 w-6 mr-2 rendering-pixelated" />
          </button>
        </div>
        
        <div className="flex justify-end my-auto">

          <a onClick={goToWishlist} className="max-lg:hidden">
            <img
              className="h-10 mt-1 transition cursor-pointer rendering-pixelated mx-3"
              src={heart}
              alt="wishlist"
              onMouseEnter={(e) => e.currentTarget.src = heartFull}
              onMouseLeave={(e) => e.currentTarget.src = heart}
            />
            <p className={`absolute font-bold text-xl ml-[52px] top-0 ${styles.amount}`}>0</p>
          </a>
          <a onClick={goToCart} className="max-lg:mr-3 min-w-14">
            <img
              className="h-12 transition cursor-pointer rendering-pixelated mx-3 max-lg:ml-0"
              src={cart}
              alt="cart"
              onMouseEnter={(e) => e.currentTarget.src = cartGif}
              onMouseLeave={(e) => e.currentTarget.src = cart}
            />
            <p className={`absolute font-bold text-xl ml-[52px] top-0 max-lg:ml-[40px] ${styles.amount}`}>1</p>
          </a>
        </div>

        <SpotifyCard />
      </div>
    </div>
  );
}

export default Header;
