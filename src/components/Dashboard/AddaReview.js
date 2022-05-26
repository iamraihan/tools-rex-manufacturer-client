import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const AddaReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const reviewHandler = event => {
        event.preventDefault();
        const name = user?.displayName
        const title = event.target.title.value
        const details = event.target.detailsTextarea.value
        const rating = event.target.rating.value


        const review =
        {
            name,
            title,
            details,
            rating
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
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
            <h2>Give a review about Us</h2>
            <form onSubmit={reviewHandler}>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text" name='name' value={user?.displayName} placeholder="Name" class="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Review Details</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24" name='detailsTextarea' placeholder="Review Details"></textarea>
                </div>

                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Rating</span>
                    </label>
                    <input type="number" name='rating' placeholder="Rating" class="input input-bordered w-full max-w-xs" />
                </div>
                <div className='w-full max-w-xs mx-auto mt-5'>
                    <input className='btn btn-primary w-full max-w-xs ' type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
};

export default AddaReview;