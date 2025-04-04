import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotifyContext } from '../SpotifyContext';
import ItemCarousel from './ItemCarousel';
import styles from './Styles.module.css';

function Product() {
  return (
    <div className="overflow-hidden">
      <div className="lg:flex overflow-hidden">
        <div className="flex-1 h-full overflow-hidden">
          <ItemCarousel />
        </div>
        <div className="w-[2px] bg-[#00000050] mr-4 "></div>
        <div className="flex flex-col justify-center flex-1 sm:gap-8 gap-4 overflow-hidden">
          <div className={`h-auto sm:p-4 p-2 sm:mx-8 mx-2 shadow-lg mx-8 h-full overflow-auto border-8 border-[#686464] text-center bg-[#fff]`}>
            <h1 className="sm:text-3xl text-lg font-bold">Super Coole tshirt</h1>
          </div>
          <div className={`min-h-[360px] sm:p-6 p-3 shadow-lg flex-1 sm:mx-8 mx-2 overflow-auto border-8 border-[#686464] text-center bg-[#fff]`}>
            <h1 className="text-xl font-bold">Holy Moley!</h1>
          </div>
          <div className="flex flex-row">
            <div className={`h-auto border-8 border-[#ff0000] sm:p-4 p-2 shadow-lg sm:ml-8 sm:mr-4 ml-2 mr-2 w-full overflow-auto text-center bg-[#ff9090] cursor-pointer`}>
              <h1 className="sm:text-2xl text-sm font-bold">Add to cart :3</h1>
            </div>
            <div className={`h-auto border-8 border-[#ff0000] sm:p-4 p-2 shadow-lg sm:mr-8 sm:ml-4 mr-2 ml-2 w-full overflow-auto text-center bg-[#ff9090] cursor-pointer`}>
              <h1 className="sm:text-2xl text-sm font-bold">BUY NOW!!!</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;