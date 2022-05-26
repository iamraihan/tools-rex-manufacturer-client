import React from 'react';

const ManageAllOrdersDetails = ({ order, index }) => {
    console.log(order);
    const { productName, email, paid } = order
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{email}</td>
            <td>
                {
                    !paid ? <button className='btn btn-xs'>UnPaid</button> : <button className='btn btn-primary btn-xs'>Pending</button>
                }
            </td>
        </tr>
    );
};

export default ManageAllOrdersDetails;