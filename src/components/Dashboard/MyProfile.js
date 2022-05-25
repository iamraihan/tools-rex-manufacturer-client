import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const updateProfileHandler = event => {
        event.preventDefault()
        const name = user?.displayName
        const email = user?.email
        const education = event.target.education.value
        const location = event.target.location.value
        const phone = event.target.phone.value
        const linkedin = event.target.linkedin.value

        const updateProfile = {
            name,
            email,
            education,
            location,
            phone,
            linkedin
        };
        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(updateProfile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-5'>Update Profile</h1>
            <form onSubmit={updateProfileHandler}>
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
                        <span class="label-text">Education</span>
                    </label>
                    <input type="text" name='education' placeholder="Education" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Location" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Phone</span>
                    </label>
                    <input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs mx-auto">
                    <label class="label">
                        <span class="label-text">Linkedin</span>
                    </label>
                    <input type="text" name='linkedin' placeholder="Linkedin" class="input input-bordered w-full max-w-xs" />
                </div>
                <div className='w-full max-w-xs mx-auto mt-5'>
                    <input className='btn btn-primary w-full max-w-xs ' type="submit" value="Update Profile" />
                </div>

            </form>
        </div>
    );
};

export default MyProfile;