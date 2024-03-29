import React, { useEffect, useState } from "react";
import Product from "../Home/Product";
import Products from "../Home/Products";
import ManageProductsDetails from "./ManageProductsDetails";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://tools-rex-backend.onrender.com/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ManageProductsDetails
              key={product._id}
              index={index}
              product={product}
            ></ManageProductsDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
