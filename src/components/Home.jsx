import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';

function Home() {
  return (
    <div>
      <Carousel />
      <h1 className="mb-[500px]">Home Page</h1>
    </div>
  );
}

export default Home;
