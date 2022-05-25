import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const AddAProduct = () => {
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth);
    const uploadProductHandler = event => {
        event.preventDefault()
        const name = event.target.productName.value
        const available = event.target.available.value
        const minimum = event.target.minimum.value
        const image = event.target.image.value
        const price = event.target.price.value
        const description = event.target.description.value

        const product = {
            name,
            available,
            minimum,
            image,
            price,
            description
        }

        fetch('http://localhost:5000/productAdd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset()
                navigate('/')
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-5'>Add Product</h1>
            <form onSubmit={uploadProductHandler}>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" name='name' value={user?.displayName} placeholder="Type here" class="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" name='email' value={user?.email} placeholder="Type here" class="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Image</span>
                    </label>
                    <input type="text" name='image' placeholder="Upload Image" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Product Name</span>
                    </label>
                    <input type="text" name='productName' placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Available Product</span>
                    </label>
                    <input type="number" name='available' placeholder="Available Product" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Minimum Order Product</span>
                    </label>
                    <input type="number" name='minimum' placeholder="Minimum Order Product" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input type="number" name='price' placeholder="Price" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Short Description</span>
                    </label>
                    <input type="text" name='description' placeholder="Short Description" class="input input-bordered w-full max-w-xs" />
                </div>
                <div className='w-full max-w-xs mx-auto mt-5'>
                    <input className='btn btn-primary w-full max-w-xs ' type="submit" value="Upload" />
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;