import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotifyContext } from '../SpotifyContext';
import ItemCarousel from './ItemCarousel';
import styles from './Styles.module.css';
import Button from '@mui/material/Button';

function Product() {
  return (
    <div className="overflow-hidden mb-8">
      <div className="lg:flex overflow-hidden">
        <div className="flex-1 h-full overflow-hidden">
          <ItemCarousel />
        </div>
        <div className="flex flex-col justify-center flex-1 sm:gap-8 gap-4 max-sm:mt-4">
          <div className={`sm:p-6 p-3 sm:mx-8 mx-2`}>
            <h1 className="sm:text-3xl text-lg font-bold">Super Coole tshirt</h1>
          </div>
          <div className={`sm:p-6 p-3 flex-1 sm:mx-8 mx-2`}>
            <h1 className="text-xl font-bold">Holy Moley!</h1>
          </div>
          <div className="flex flex-row gap-2 sm:mx-8 mx-2">
            <div className={`cursor-pointer flex-grow`}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#3d58ba',
                  color: '#fff',
                }}
                className="w-full h-10 sm:h-12"
              >
                NU KOPEN PLS PLS
              </Button>
            </div>
            <div className={`cursor-pointer`}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#dd125f',
                color: '#fff',
              }}
              className="w-full h-10 sm:h-12"
            >
              Add to cart :3
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;