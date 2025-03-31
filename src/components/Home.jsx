import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotifyContext } from '../SpotifyContext';
import Carousel from './Carousel';

function Home() {
  const navigate = useNavigate();
  const { userProfile } = useContext(SpotifyContext);

  const goToProducts = () => {
    navigate('/products');
  };
  
  return (
    <div>
      <Carousel />
      {userProfile ? (
        <h1 className="text-3xl mx-auto text-center uppercase">HIIIIIIIIII {userProfile.display_name}!!!!!</h1>
      ) : (
        <h1 className="text-3xl mx-auto text-center">HIIIIIIIIII!!!!!</h1>
      )}
      <h1 onClick={goToProducts} className="text-xl mx-auto text-center my-12 cursor-pointer hover:underline">Products page shortcut</h1>
    </div>
  );
}

export default Home;
