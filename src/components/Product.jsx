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
          <div className={`h-auto border-8 border-[#686464] sm:p-4 p-2 sm:mx-8 mx-2 shadow-lg mx-8 h-full overflow-auto text-center bg-[#fff]`}>
            <h1 className="sm:text-3xl text-lg font-bold">Super Coole tshirt</h1>
          </div>
          <div className={`${styles.productdesc} min-h-[360px] border-4 sm:p-6 p-3 rounded-lg shadow-lg flex-1 sm:mx-8 mx-2 overflow-auto text-center`}>
            <h1 className="text-xl font-bold">Holy Moley!</h1>
            <p className="text-sm">This is a super cool tshirt that you can wear to parties, events, or just lounging around the house. It's made of 100% cotton and is super comfortable!</p>
            <p className="text-sm">Available in sizes S, M, L, and XL. Choose your size wisely!</p>
            <p className="text-sm">Price: $19.99</p>
            <p className="text-sm">Color: Red</p>
            <p className="text-sm">Material: 100% Cotton</p>
            <p className="text-sm">Care Instructions: Machine wash cold, tumble dry low.</p>
            <p className="text-sm">Shipping: Free shipping on orders over $50!</p>
            <p className="text-sm">Returns: 30-day return policy. Must be unworn and in original packaging.</p>
            <p className="text-sm">Customer Reviews: ⭐⭐⭐⭐⭐</p>
            <p className="text-sm">Available for pickup at our store location.</p>
            <p className="text-sm">Limited stock available. Order now!</p>
            <p className="text-sm">Don't miss out on this amazing deal!</p>
            <p className="text-sm">Get your Super Coole tshirt today!</p>
            <p className="text-sm">Click the button below to add to cart!</p>
            <p className="text-sm">Hurry, while supplies last!</p>
            <p className="text-sm">Thank you for shopping with us!</p>
            <p className="text-sm">We appreciate your business!</p>
            <p className="text-sm">Follow us on social media for updates and promotions!</p>
            <p className="text-sm">Instagram: @supercoole</p>
            <p className="text-sm">Facebook: Super Coole</p>
            <p className="text-sm">Twitter: @supercoole</p>
            <p className="text-sm">TikTok: @supercoole</p>
            <p className="text-sm">YouTube: Super Coole</p>
            <p className="text-sm">Pinterest: Super Coole</p>
            <p className="text-sm">Snapchat: @supercoole</p>
            <p className="text-sm">LinkedIn: Super Coole</p>
          </div>
          <div className={`h-auto border-8 border-[#ff0000] sm:p-4 p-2 sm:mx-8 mx-2 shadow-lg mx-8 h-full overflow-auto text-center bg-[#ff9090] cursor-pointer`}>
            <h1 className="sm:text-3xl text-lg font-bold">BUY NOW!!!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
