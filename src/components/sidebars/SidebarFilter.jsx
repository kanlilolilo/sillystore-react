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
        <Button size="small" variant="contained" onClick={toggleSidebar}>
          Filter
        </Button>
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
