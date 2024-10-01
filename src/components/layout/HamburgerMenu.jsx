import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

function HamburgerMenu() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Adjust breakpoint as necessary

  const toggleDropdown = () => {
    setIsDropdownVisible(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    const handleResize = () => {
      const isMobileNow = window.innerWidth < 1024; // Adjust breakpoint as necessary
      if (!isMobileNow) {
        setIsDropdownVisible(false); // Close dropdown when switching to desktop view
      }
      setIsMobile(isMobileNow);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
    setIsDropdownVisible(false);
  };

  const goToProducts = () => {
    navigate('/products');
    setIsDropdownVisible(false);
  };

  const goToWishlist = () => {
    navigate('/wishlist');
    setIsDropdownVisible(false);
  };

  const goToCart = () => {
    navigate('/cart');
    setIsDropdownVisible(false);
  };

  const goToLogin = () => {
    navigate('/auth/login');
    setIsDropdownVisible(false);
  };

  return (
    <div ref={dropdownRef}>
      <a
        className={`cursor-pointer ${isDropdownVisible ? 'bg-[#98c1f990]' : ''}`}
        onClick={toggleDropdown}
      >
        <div className="lg:hidden ml-1 -mr-1 p-1">
          <Hamburger size={42} color="#adf2ff" toggled={isDropdownVisible} />
        </div>
      </a>

      {isMobile && (
        <div
          className={`lg:hidden max-w-[200px] min-h-[250px] absolute mt-2 transition-all duration-500 bg-[#ffffff] border-b-8 border-[#3D58BA] 
            ${isDropdownVisible ? 'left-0' : '-left-full'}
          `}
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }} // Flex container
        >
          <div style={{ flexGrow: 1 }}> {/* Container for other menu items */}
            <p onClick={goToHome} className="text-center p-2 hover:bg-[#00000010] cursor-pointer px-4">Go to Home</p>
            <p onClick={goToProducts} className="text-center p-2 hover:bg-[#00000010] cursor-pointer px-4">Products page shortcut</p>
            <p onClick={goToWishlist} className="text-center p-2 hover:bg-[#00000010] cursor-pointer px-4">Go to Wishlist</p>
            <p onClick={goToCart} className="text-center p-2 hover:bg-[#00000010] cursor-pointer px-4">Go to Cart</p>
          </div>

          <div> {/* Login button at the bottom */}
            <p onClick={goToLogin} className="text-center p-2 hover:bg-[#00000010] cursor-pointer px-4">Login</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
