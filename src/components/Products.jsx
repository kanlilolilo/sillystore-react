import React from 'react';
import SingleProduct from './SingleProduct';
import SidebarLeft from './sidebars/SidebarLeft';
import SidebarRight from './sidebars/SidebarRight';
import SidebarFilter from './sidebars/SidebarFilter';

function Products() {
  return (
    <div className="flex">

      <SidebarLeft />

      <div className="flex-1">
        <h1 className="text-3xl mx-auto text-center">Products</h1>

        <div className="xl:max-w-[90%] sm:max-w-[560px] mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
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

      <SidebarRight />
    </div>
  );
}

export default Products;
