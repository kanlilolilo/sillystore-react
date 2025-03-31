import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import SidebarLeft from './sidebars/SidebarLeft';
import styles from './Styles.module.css';

function Products() {
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProducts((prev) => [...new Set([...prev, entry.target.dataset.index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const productElements = document.querySelectorAll('.single-product');
    productElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex">
      <SidebarLeft />
      <div className="flex-1">
        <h1 className="text-3xl mx-auto text-center mt-4">Products</h1>
        <div className={`${styles.grid} xl:max-w-[80%] sm:max-w-[560px] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16 mb-10 [content-visibility:auto]`}>
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              data-index={index}
              className={`single-product transition-opacity duration-700 ${
                visibleProducts.includes(index.toString()) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <SingleProduct />
            </div>
          ))}
        </div>
        <h1 className="text-xl mx-auto text-center my-6">SillyStore</h1>
      </div>
    </div>
  );
}

export default Products;
