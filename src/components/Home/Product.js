import React from 'react';
import PrimaryButton from './Shared/PrimaryButton';
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, image, minimum, available, description, price } = product
    return (
        <div class="card  bg-accent shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <div className='flex justify-between'>
                    <p><span className='font-bold'>Available Quantity</span>: {available}</p>
                    <p><span className='font-bold'>Available Quantity</span>: {minimum}</p>
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className='text-secondary font-bold'>Price: ${price}</p>
                <div class="card-actions justify-center">
                    {/* <PrimaryButton> <FaShoppingBag className='mr-2 text-xl'></FaShoppingBag> Buy Now</PrimaryButton> */}
                    <Link to='/purchase '> <PrimaryButton> <FaShoppingBag className='mr-2 text-xl'></FaShoppingBag> Buy Now</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;