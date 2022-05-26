import React from 'react';

const ReviewDetails = ({ review }) => {
    console.log(review);
    const { title, name, details, rating } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
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