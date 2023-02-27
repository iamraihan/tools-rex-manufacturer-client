import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://tools-rex-backend.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {!products.length && (
        <p
          className="text-red-500 text-4xl text-center font-semibold
      "
        >
          If the tool doesn't show please reload again
        </p>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 max-w-screen-xl mx-auto">
        {
          products.map((product) => (
            <Product key={product._id} product={product}></Product>
          )) // need to recheck
        }
      </div>
    </div>
  );
};

export default Products;
