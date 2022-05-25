import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [revivesUpdate, setReviewsUpdate] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews', {
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
        <div>
            <h2>{revivesUpdate.length}</h2>
        </div>
    );
};

export default Reviews;