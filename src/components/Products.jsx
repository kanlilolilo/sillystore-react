import React from 'react';
import SingleProduct from './SingleProduct';

function Products() {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="relative">
        <div className="hidden -m-6 lg:flex flex-col items-center w-56 h-[calc(100vh-94px)] bg-gray-200 p-4 text-center sticky top-[92px]">
          <p className="text-lg">Left Sidebar Content</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-3xl mx-auto text-center">Products</h1>

        {/* Center the grid by wrapping it in a container with mx-auto */}
        <div className="xl:max-w-[90%] sm:max-w-[560px] mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Render your products here */}
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="relative">
        <div className="hidden -m-6 lg:flex flex-col items-center w-56 h-[calc(100vh-94px)] bg-gray-200 p-4 text-center sticky top-[92px]">
          <p className="text-lg">Right Sidebar Content</p>
        </div>
      </div>
    </div>
  );
}

export default Products;

