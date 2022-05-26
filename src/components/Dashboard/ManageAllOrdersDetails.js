import React from 'react';

const ManageAllOrdersDetails = ({ order, index }) => {
    console.log(order);
    const { productName, email, } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{email}</td>
            <td>
                <button className='btn btn-primary btn-xs'>Pending</button>
            </td>
        </tr>
    );
};

export default ManageAllOrdersDetails;