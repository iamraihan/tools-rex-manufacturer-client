import React from "react";

const ReviewDetails = ({ review }) => {
  console.log(review);
  const { title, name, details, rating } = review;
  return (
    <div
      className=" mx-auto card bg-base-100  border shadow md:w-72 w-96 p-5"
      data-aos="flip-right"
      data-aos-anchor-placement="flip-right"
      data-aos-duration="1500"
    >
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{title}</p>
        <p>{details}</p>
        <p>{rating} Star</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
