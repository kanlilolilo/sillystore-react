import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotifyContext } from '../SpotifyContext';
import ItemCarousel from './ItemCarousel';
import styles from './Styles.module.css';

function Product() {
  return (
    <div>
      <div className="lg:flex overflow-hidden">
        <div className="flex-1 h-full overflow-hidden">
          <ItemCarousel />
        </div>
        <div className={`${styles.productdesc} h-[480px] border-4 p-6 rounded-lg shadow-lg flex-1 h-full overflow-auto text-center`}>
          <h1 className="text-xl font-bold">Super Coole tshirt</h1>
        </div>
      </div>
    </div>
  );
}

export default Product;
