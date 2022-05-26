import React from 'react';
import notFound from '../../../assests/notfound-error.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='h-screen w-screen ' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;