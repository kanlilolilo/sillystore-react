import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ItemCarousel from './ItemCarousel';
import { SpotifyContext } from '../SpotifyContext'; // Spotify context import

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Product() {
  const [value, setValue] = React.useState(0);
  const { topArtist } = useContext(SpotifyContext); // Access Spotify data

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const artistName = topArtist?.name || '?????????';
  const popularity = topArtist?.popularity || '??';
  const discount = topArtist?.popularity * 2 || '??';
  const artistImage = topArtist?.images?.[0]?.url;

  return (
    <div className="flex flex-col items-center mb-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#ffffff70] border border-4 border-[#00000080] rounded-lg p-8 w-auto">
        <div className="relative">
          <ItemCarousel artistImage={artistImage} />
        </div>

        {/* Right side - Product details */}
        <div className="space-y-4">
          <h1 className="md:text-2xl text-lg font-bold -mb-2">{artistName} tshirt super cool YEAHHH</h1>
          <p className="md:text-lg text-sm">★★★★☆ based on <span className="cursor-pointer hover:underline">1.492.489 reviews</span></p>

          <p className="text-[#FFFF10] outline-[#000] font-semibold">
            <span className="md:text-lg text-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">SPECIAL OFFER! 50% OFF</span> <span className="line-through text-[#000] md:text-lg text-sm ">${discount}.00 USD</span> <span className="text-[#000] md:text-lg text-sm ">${popularity}.00 USD</span>
          </p>

          <div>
            <h1 className="md:text-lg text-sm font-medium -mb-2">How many does bro want? <span className="md:text-lg text-sm text-[#00000064]">(sorry 1 per person)</span> </h1>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center border border-black max-md:hidden">
              <button className="w-12 h-12 border-r border-black border-2 bg-[#efefef] cursor-not-allowed opacity-40" disabled>-</button>
              <span className="w-20 h-12 flex items-center justify-center border-2 bg-[#ffffff] pb-0.5">1</span>
              <button className="w-12 h-12 border-l border-black border-2 bg-[#efefef] cursor-not-allowed opacity-40" disabled>+</button>
            </div>
            <button className="bg-[#0A1B41] text-[#fff] w-40 h-12 text-lg transition-shadow duration-200 hover:[box-shadow:0_0px_16px_12px_rgba(10,27,65,0.3)] active:text-[#dedede] max-md:mt-3">
              Add to Cart
            </button>
          </div>

          {/* Tabs below Add to Cart */}
          <div className="pt-1 max-md:text-sm">
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="product details tabs">
                  <Tab label="Information" {...a11yProps(0)} />
                  <Tab label="Shipping" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                {topArtist
                  ? `super nice ${artistName} tshirt designed for fans who live and breathe their music.`
                  : 'Tshirt made of 100% cotton, with a unique design that will make you the talk of the town. Available in all sizes, from S to XXL.'}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                We ain't shippin ts🥀 sybau icl ts pmo gurt: yo
              </CustomTabPanel>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
