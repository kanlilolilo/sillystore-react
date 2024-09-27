import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

function Home() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };
  
  return (
    <div>
      <Carousel />
      <h1 className="text-3xl mx-auto text-center">Home Page</h1>
      <h1 onClick={goToProducts} className="text-xl mx-auto text-center my-12 cursor-pointer hover:underline">Products page shortcut</h1>
    </div>
  );
}

export default Home;
