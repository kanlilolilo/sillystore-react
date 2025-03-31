import React, { useState, useRef, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

function SidebarFilter() {
  // State for price range
  const [priceRange, setPriceRange] = useState([0, 100]);

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

  // State for sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  
  // Ref for the sidebar
  const sidebarRef = useRef(null);

  // Handler for slider change
  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  // Handler for resetting all filters
  const handleResetFilters = () => {
    setPriceRange([0, 100]);
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

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Close sidebar if clicked outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarVisible(false);
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div>
      <div className="absolute fixed">
        <a onClick={toggleSidebar}>
          <svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-21.07 -21.07 252.82 252.82" xml:space="preserve" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="2.1068000000000002"></g><g id="SVGRepo_iconCarrier"> <path d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0 C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23 c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863 c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767 C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926 c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62 c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486 c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938 C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z"></path> </g></svg>
        </a>
      </div>
      <div className="absolute top-[92px]">
        <div
          ref={sidebarRef}
          className={`transition-all duration-500 ease-in-out ${
            isSidebarVisible ? '-ml-6' : '-ml-64'
          } lg:flex flex-col items-center w-56 h-[calc(100vh-93px)] bg-[#ffffff] p-4 px-6 text-center border-solid border-r-8 border-[#3D58BA] overflow-y-auto`}
        >
          <div className="mb-3 sticky top-0">
            <Button size="small" variant="contained" onClick={handleResetFilters}>
              Reset Filter
            </Button>
          </div>
          <div className="absolute top-0 right-4 cursor-pointer p-4" onClick={toggleSidebar}>
            ✖
          </div>
          <div className="w-full">
            <h3 className="text-md mb-2">Product Type</h3>
            <label className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={productTypes.tShirt}
                onChange={() =>
                  setProductTypes({ ...productTypes, tShirt: !productTypes.tShirt })
                }
              />
              <span className="ml-2">T-Shirt</span>
            </label>
            <label className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={productTypes.hoodies}
                onChange={() =>
                  setProductTypes({ ...productTypes, hoodies: !productTypes.hoodies })
                }
              />
              <span className="ml-2">Hoodies</span>
            </label>
            <label className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={productTypes.accessories}
                onChange={() =>
                  setProductTypes({ ...productTypes, accessories: !productTypes.accessories })
                }
              />
              <span className="ml-2">Accessories</span>
            </label>

            <h3 className="text-md mb-2 mt-4">Sizes</h3>
            {Object.keys(sizes).map((size) => (
              <label key={size} className="flex items-center block text-left text-sm mb-1">
                <Checkbox
                  size="small"
                  checked={sizes[size]}
                  onChange={() => setSizes({ ...sizes, [size]: !sizes[size] })}
                />
                <span className="ml-2">{size.toUpperCase()}</span>
              </label>
            ))}

            <h3 className="text-md mb-2 mt-4">Color</h3>
            {Object.keys(colors).map((color) => (
              <label key={color} className="flex items-center block text-left text-sm mb-1">
                <Checkbox
                  size="small"
                  checked={colors[color]}
                  onChange={() => setColors({ ...colors, [color]: !colors[color] })}
                />
                <span className="ml-2">
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </span>
              </label>
            ))}

            <h3 className="text-md mb-2 mt-4">Price Range</h3>
            <div className="mb-4">
              <Slider
                value={priceRange}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={0}
                max={100}
              />
              <div className="flex justify-between text-sm mt-1">
                <span>€{priceRange[0]}</span>
                <span>€{priceRange[1]}</span>
              </div>
            </div>

            <h3 className="text-md mb-2 mt-4">Extra</h3>
            <label className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={extras.newStuff}
                onChange={() => setExtras({ ...extras, newStuff: !extras.newStuff })}
              />
              <span className="ml-2">New Stuff</span>
            </label>
            <label className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={extras.clearance}
                onChange={() => setExtras({ ...extras, clearance: !extras.clearance })}
              />
              <span className="ml-2">Clearance Stuff</span>
            </label>
            <label className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={extras.promotional}
                onChange={() =>
                  setExtras({ ...extras, promotional: !extras.promotional })
                }
              />
              <span className="ml-2">Promotional</span>
            </label>
            <label className="flex items-center block text-left text-sm mb-1">
              <Checkbox
                size="small"
                checked={extras.limitedEdition}
                onChange={() =>
                  setExtras({ ...extras, limitedEdition: !extras.limitedEdition })
                }
              />
              <span className="ml-2">Limited Edition</span>
            </label>

            <p className="text-sm mt-6 text-gray-300">Silly store</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarFilter;
