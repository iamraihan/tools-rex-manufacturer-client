import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className='btn btn-primary outline-none border-0 hover:bg-secondary hover:text-base-100'>{children} </button>
    );
};

export default PrimaryButton;