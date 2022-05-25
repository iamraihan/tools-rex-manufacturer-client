import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';

const MakeAdmin = () => {
    // const [makeAdmin, setMakeAdmin] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/users', {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }

    //     })
    //         .then(res => res.json())
    //         .then(data => setMakeAdmin(data))

    // }, [])

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>{users.length}</h2>
            {/* <h2>{makeAdmin.length}</h2> */}
        </div>
    );
};

export default MakeAdmin;