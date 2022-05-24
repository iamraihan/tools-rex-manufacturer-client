import React from 'react';

const MyOrderList = ({ order }) => {
    const { productName, quantity, price } = order
    console.log(order);
    return (
        <div>
            <h2>{productName}</h2>
        </div>
    );
};

export default MyOrderList;