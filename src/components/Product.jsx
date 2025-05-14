import React from 'react';
import ItemCarousel from './ItemCarousel';
import styles from './Styles.module.css';
import wishlist from '../assets/img/heart_img.png';

function Product() {
  return (
    <div>
      <div className="relative">
        <ItemCarousel />
        <div className="absolute md:top-4 md:left-6 top-0 left-0 px-4 py-2 rounded-md z-10 rendering-pixelated flex gap-4">
          <img width="48px" height="48px" className="cursor-pointer" src={wishlist}></img>
          <p className="max-md:hidden">← I LOVE</p>
        </div>
        <h1 className="absolute md:top-4 md:right-6 top-0 right-0 text-2xl font-bold bg-black/60 px-4 py-2 rounded-md z-10">
          $18.99
        </h1>
      </div>

      <div className="flex flex-wrap justify-center lg:gap-16 gap-8 p-4 mt-8">
        <div className="w-[320px] bg-[#defeff] outline outline-[#3d58ba] shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Super mooie tshirt van je moeder</h2>
          <p className="text-lg">dit is echt fantastisch kharua skibidi rvspijker haha gay oke en nu wtf doe ik hallo wanneer fortnite</p>
        </div>
        <div className="w-[320px] bg-[#defeff] outline outline-[#3d58ba] shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Maten enzo haha</h2>
          <p className="text-lg">XXS XS S M L XL XXL XXXL XXXXL EN ZELFS XXXXXL voor de discord mods</p>
        </div>
        <div className="w-[320px] bg-[#defeff] outline outline-[#3d58ba] shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Wordt ASAP (neit) geleverd met postNL</h2>
          <p className="text-lg">Gast denk je nou echt dat dit bezorgt gaat worden?</p>
        </div>
      </div>

      <div class="flex justify-center gap-6 mt-6 mb-4">
        <button class="px-6 py-3 text-white text-xl font-bold bg-gradient-to-r from-pink-500 via-green-400 to-yellow-300 border-4 border-black rounded-xl shadow-lg shadow-pink-500 animate-bounce hover:rotate-6 transition-all duration-300">
          BUY NOW!!!
        </button>
        <button class="px-6 py-3 text-white text-xl font-bold bg-gradient-to-r from-yellow-300 via-blue-400 to-pink-500 border-4 border-black rounded-xl shadow-lg shadow-blue-500 animate-pulse hover:-rotate-6 transition-all duration-300">
          In cart pls
        </button>
      </div>

    </div>
  );
}

export default Product;
