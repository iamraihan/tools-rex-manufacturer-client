import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import MyOrderList from './MyOrderList';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    const email = user?.email
    // console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/order/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [email])
    return (
        <div>
            {
                orders.map(order => <MyOrderList key={order._id} order={order}></MyOrderList>)
            }
        </div>
    );
};

export default MyOrders;