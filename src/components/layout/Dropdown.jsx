import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function Dropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (!isClicked) {
      setIsDropdownVisible(true);
      setIsClicked(true);
    } else {
      setIsDropdownVisible(false);
      setIsClicked(false);
    }
  };

  const toggleDropdownDown = () => {
    setIsDropdownVisible(false);
    setIsClicked(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
        setIsClicked(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsDropdownVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsDropdownVisible(false);
    }
  };

  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
    toggleDropdownDown();
  };

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        className={`cursor-pointer flex hover:bg-[#98c1f990] transition px-3 pb-3.5 pt-0.5 ${
          isDropdownVisible ? 'bg-[#98c1f990]' : ''
        }`}
        onClick={toggleDropdown}
      >
        <p className="font-bold text-xl text-[#000000] mt-3">Silly Collections↓</p>
      </a>

      {isDropdownVisible && (
        <div className="border-t-8 border-[#00000000;]">
          <div className="min-w-[640px] min-h-[320px] absolute bg-[#ffffff] border-b-8 border-[#3D58BA]">
            <p onClick={goToProducts} className="text-center p-2 hover:bg-[#00000010] cursor-pointer">Products page shortcut</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
