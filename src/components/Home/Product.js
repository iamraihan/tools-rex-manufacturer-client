import React from "react";
import PrimaryButton from "./Shared/PrimaryButton";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, image, minimum, available, description, price, _id } = product;
  return (
    <div
      className="card  bg-accent shadow-xl"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="flex justify-between">
          <p>
            <span className="font-bold">Available Quantity</span>: {available}
          </p>
          <p>
            <span className="font-bold">Minimum Order</span>: {minimum}
          </p>
        </div>
        <p>{description.slice(0, 100)}...</p>
        <p className="text-secondary font-bold">Price: ${price}</p>
        <div className="card-actions justify-center">
          <Link to={`/purchase/${_id}`}>
            {" "}
            <PrimaryButton>
              {" "}
              <FaShoppingBag className="mr-2 text-xl"></FaShoppingBag> Buy Now
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
