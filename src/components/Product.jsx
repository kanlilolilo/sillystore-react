import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotifyContext } from '../SpotifyContext';
import ItemCarousel from './ItemCarousel';

function Product() {
  return (
    <div>
      <ItemCarousel />
      <h1 className="text-3xl mx-auto text-center">Super Coole tshirt</h1>
    </div>
  );
}

export default Product;
