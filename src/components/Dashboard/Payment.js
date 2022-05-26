import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Home/Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    // const [order, setOrder] = useState({})
    const url = `http://localhost:5000/orders/${id}`
    const { data: order, isLoading, refetch } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'content-type': 'application/json'
        },

    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/order/${id}`, {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //         },
    //         'content-type': 'application/json'

    //     })
    //         .then(res => res.json())
    //         .then(data => setOrder(data))
    // }, [id])
    console.log(order);
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{order.userName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;