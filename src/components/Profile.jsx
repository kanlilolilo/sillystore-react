import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpotifyContext } from '../SpotifyContext';
import styles from './Styles.module.css';
import crown from '../assets/img/crown.png'

function Profile() {
  const navigate = useNavigate();
  const { userProfile, logout } = useContext(SpotifyContext);

  const handleLogout = () => {
    logout();
    navigate('/auth/Logout');
  };

  return (
    <div className="flex flex-col justify-center items-center pt-8 text-xs sm:text-lg drop-shadow-lg">
      {userProfile ? (
        <>
          <div className={`${styles.pinkbg} w-full max-w-xs sm:max-w-md lg:max-w-xl border-4 p-6 rounded-lg shadow-lg flex flex-col items-center`}>
            {userProfile.product === 'premium' && (
              <img 
                src={crown}
                className="absolute h-20 mt-[-48px] mr-[32px]" 
              />
            )}
            <img 
              src={userProfile.images?.[0]?.url} 
              alt="Profile" 
              className="w-32 sm:w-40 rounded-full border-4 mb-4" 
            />
            <div className="text-center w-full">
              <label className="text-sm">Username</label>
              <h1 className="mb-2 bg-[#fff] border-[3px] rounded-lg border-black p-1 font-semibold truncate overflow-hidden text-ellipsis whitespace-nowrap">{userProfile.display_name}</h1>
              <label className="text-sm">Email</label>
              <p className="mb-2 bg-[#fff] border-[3px] rounded-lg p-1 truncate overflow-hidden text-ellipsis whitespace-nowrap">{userProfile.email}</p>
              <label className="text-sm">ID</label>
              <p className="bg-[#fff] border-[3px] rounded-lg p-1 truncate overflow-hidden text-ellipsis whitespace-nowrap">{userProfile.id}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout} 
            className="mt-6"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-center text-lg">Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
