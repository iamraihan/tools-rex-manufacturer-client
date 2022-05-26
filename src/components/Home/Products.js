import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://salty-lake-19490.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 max-w-screen-xl mx-auto'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>) // need to recheck 
            }
        </div>
    );
};

export default Products;