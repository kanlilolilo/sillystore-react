import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import styles from './Sidebar.module.css';

function SidebarLeft() {
  // State for price range
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  // State for product type checkboxes
  const [productTypes, setProductTypes] = useState({
    tShirt: false,
    hoodies: false,
    accessories: false,
  });
  
  // State for size checkboxes
  const [sizes, setSizes] = useState({
    xxs: false,
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    xxxl: false,
    xxxxl: false,
  });

  // State for color checkboxes
  const [colors, setColors] = useState({
    white: false,
    black: false,
  });

  // State for extra checkboxes
  const [extras, setExtras] = useState({
    newStuff: false,
    clearance: false,
    promotional: false,
    limitedEdition: false,
  });

  // Handler for slider change
  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // State for animation
  const [isRotating, setIsRotating] = useState(false);

  // Handler for resetting all filters
  const handleResetFilters = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500); // Reset animation state after 1 second
    setPriceRange([0, 1000]);
    setProductTypes({
      tShirt: false,
      hoodies: false,
      accessories: false,
    });
    setSizes({
      xxs: false,
      xs: false,
      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false,
      xxxl: false,
      xxxxl: false,
    });
    setColors({
      white: false,
      black: false,
    });
    setExtras({
      newStuff: false,
      clearance: false,
      promotional: false,
      limitedEdition: false,
    });
  };

  // State for sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="lg:relative max-lg:fixed z-30">
      <div className="lg:hidden absolute fixed">
        <button size="small" variant="contained" color="#ffffff" onClick={toggleSidebar}>
          <svg fill="#000000" height="48px" width="48px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-21.07 -21.07 252.82 252.82" xml:space="preserve" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.1068000000000002"></g><g id="SVGRepo_iconCarrier"> <path d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0 C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23 c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863 c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767 C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926 c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62 c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486 c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938 C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z"></path> </g></svg>
        </button>
      </div>
        <div
          className={`
          transition-all duration-500 ease-in-out
          ${
            isSidebarVisible ? '-ml-6' : '-ml-64'
          } 
          lg:-m-6 -m-6 lg:flex flex-col w-56 lg:w-[280px] h-[calc(100vh-94px)] bg-[#ffffff] p-4 px-6 text-center sticky top-[92px] border-solid border-r-8 border-[#3D58BA] overflow-y-auto`}>
        <div className="mb-3 sticky top-0">
          <div className="max-w-6 h-6">
            <a onClick={(e) => {e.preventDefault(); handleResetFilters();}}>
              <div>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 119.4 122.88"
                  width="24"
                  height="24"
                  className={`cursor-pointer ${isRotating ? styles['rotate-animation'] : ''}`}
                >
                  <title>reload</title><path d="M83.91,26.34a43.78,43.78,0,0,0-22.68-7,42,42,0,0,0-24.42,7,49.94,49.94,0,0,0-7.46,6.09,42.07,42.07,0,0,0-5.47,54.1A49,49,0,0,0,30,94a41.83,41.83,0,0,0,18.6,10.9,42.77,42.77,0,0,0,21.77.13,47.18,47.18,0,0,0,19.2-9.62,38,38,0,0,0,11.14-16,36.8,36.8,0,0,0,1.64-6.18,38.36,38.36,0,0,0,.61-6.69,8.24,8.24,0,1,1,16.47,0,55.24,55.24,0,0,1-.8,9.53A54.77,54.77,0,0,1,100.26,108a63.62,63.62,0,0,1-25.92,13.1,59.09,59.09,0,0,1-30.1-.25,58.45,58.45,0,0,1-26-15.17,65.94,65.94,0,0,1-8.1-9.86,58.56,58.56,0,0,1,7.54-75,65.68,65.68,0,0,1,9.92-8.09A58.38,58.38,0,0,1,61.55,2.88,60.51,60.51,0,0,1,94.05,13.3l-.47-4.11A8.25,8.25,0,1,1,110,7.32l2.64,22.77h0a8.24,8.24,0,0,1-6.73,9L82.53,43.31a8.23,8.23,0,1,1-2.9-16.21l4.28-.76Z"/></svg>
              </div>
            </a>
          </div>
          <div className="lg:hidden absolute -top-1 right-0 cursor-pointer text-[28px]" onClick={toggleSidebar}>
            ✖
          </div>
        </div>

        <div className="mx-auto">
          <h3 className="lg:text-2xl mb-2">Product Type</h3>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={productTypes.tShirt}
              onChange={() => setProductTypes({ ...productTypes, tShirt: !productTypes.tShirt })}
            />
            <span className="ml-2 select-none cursor-pointer">T-Shirt</span>
          </label>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={productTypes.hoodies}
              onChange={() => setProductTypes({ ...productTypes, hoodies: !productTypes.hoodies })}
            />
            <span className="ml-2 select-none cursor-pointer">Hoodies</span>
          </label>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={productTypes.accessories}
              onChange={() => setProductTypes({ ...productTypes, accessories: !productTypes.accessories })}
            />
            <span className="ml-2 select-none cursor-pointer">Accessories</span>
          </label>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={productTypes.other}
              onChange={() => setProductTypes({ ...productTypes, other: !productTypes.other })}
            />
            <span className="ml-2 select-none cursor-pointer">Other</span>
          </label>

          <h3 className="lg:text-2xl mb-2 mt-4">Sizes</h3>
          {Object.keys(sizes).map((size) => (
            <label key={size} className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={sizes[size]}
                onChange={() => setSizes({ ...sizes, [size]: !sizes[size] })}
                color="secondary"
              />
              <span className="ml-2 select-none cursor-pointer">{size.toUpperCase()}</span>
            </label>
          ))}

          <h3 className="lg:text-2xl mb-2 mt-4">Color</h3>
          {Object.keys(colors).map((color) => (
            <label key={color} className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={colors[color]}
                onChange={() => setColors({ ...colors, [color]: !colors[color] })}
                color="success"
              />
              <span className="ml-2 select-none cursor-pointer">{color.charAt(0).toUpperCase() + color.slice(1)}</span>
            </label>
          ))}

          <h3 className="lg:text-2xl mb-2 mt-4">Price Range</h3>
          <div className="mb-4">
            <Slider
              value={priceRange}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              color="error"
              />
            <div className="flex justify-between text-sm mt-1">
              <span>€{priceRange[0]}</span>
              <span>€{priceRange[1]}</span>
            </div>
          </div>

          <h3 className="lg:text-2xl mb-2 mt-4">Extra</h3>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={extras.newStuff}
              onChange={() => setExtras({ ...extras, newStuff: !extras.newStuff })}
              color="warning"
              />
            <span className="ml-2 select-none cursor-pointer">New Stuff</span>
          </label>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={extras.clearance}
              onChange={() => setExtras({ ...extras, clearance: !extras.clearance })}
              color="warning"
              />
            <span className="ml-2 select-none cursor-pointer">Clearance Stuff</span>
          </label>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={extras.promotional}
              onChange={() => setExtras({ ...extras, promotional: !extras.promotional })}
              color="warning"
            />
            <span className="ml-2 select-none cursor-pointer">Promotional</span>
          </label>
          <label className="flex items-center block text-left text-sm mb-1">
            <Checkbox
              size="small"
              checked={extras.limitedEdition}
              onChange={() => setExtras({ ...extras, limitedEdition: !extras.limitedEdition })}
              color="warning"
            />
            <span className="ml-2 select-none cursor-pointer">Limited Edition</span>
          </label>

          <p className="text-sm mt-6 text-gray-300">Silly store</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft;
