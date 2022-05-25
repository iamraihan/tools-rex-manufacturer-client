import React from 'react';

const MakeAdminDetails = ({ user, index }) => {
    const { email, _id } = user
    console.log(user);
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                <button className='btn btn-primary btn-xs'>Make Admin</button>
            </td>

        </tr>
    );
};

export default MakeAdminDetails;