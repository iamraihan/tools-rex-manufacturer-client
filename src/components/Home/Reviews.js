import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {
    const [reviewsUpdate, setReviewsUpdate] = useState([])
    useEffect(() => {
        fetch('https://salty-lake-19490.herokuapp.com/reviews', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setReviewsUpdate(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5  max-w-screen-xl mx-auto'>
            {
                reviewsUpdate.map(review => <ReviewDetails key={review._id} review={review}></ReviewDetails>)
            }
        </div>
    );
};

export default Reviews;