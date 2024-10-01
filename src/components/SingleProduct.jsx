import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Styles.module.css';
import cart from '../assets/img/cart_img_white.png';

function SingleProduct() {
  return (
    <div className={`${styles.product} cursor-pointer w-[240px] h-[240px] flex rounded-3xl mx-auto mb-3`}>
      <div className="w-[240px] h-10 bg-[#849fe2] rounded-full mt-auto border-solid border-[#000] border-2">
        <h1 className=" text-lg text-white mt-0.5 px-4 max-w-[200px] truncate cursor-default">Kharua's super mooie tshirt</h1>
        <div className="w-10 h-10 bg-[#3d58ba] rounded-full -mt-8 ml-auto -mr-0.5 border-solid border-[#000] border-2 cursor-pointer">
          <img src={cart} className="h-6 w-6 mx-auto mt-1.5 rendering-pixelated"></img>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
