import React, { useEffect, useState } from 'react';
import ManageAllOrdersDetails from './ManageAllOrdersDetails';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        allOrders.map((order, index) => <ManageAllOrdersDetails key={order._id} index={index} order={order}></ManageAllOrdersDetails>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;