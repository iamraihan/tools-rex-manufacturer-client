import React from 'react';

const ManageProductsDetails = ({ product, index }) => {
    const { image, name, _id } = product
    console.log(product);
    const deleteProduct = id => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={image} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>
                <button onClick={() => { deleteProduct(_id) }} className='btn btn-error text-base-100'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductsDetails;