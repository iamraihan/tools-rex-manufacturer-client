import { updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Home/Shared/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const { data: profile, isLoading, refetch } = useQuery('profile', () => fetch('http://localhost:5000/profile', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(userProfile[0]);
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
                refetch()
            })
    }
    return (
        <div>
            <div class="hero  bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">{profile[0]?.name}</h1>
                        <p class="pt-3 text-2xl font-semibold">Email: {profile[0]?.email}</p>
                        <p class="pt-3 text-2xl font-semibold">Education : {profile[0]?.education}</p>
                        <p class="pt-3 text-2xl font-semibold">Location : {profile[0]?.location}</p>
                        <p class="pt-3 text-2xl font-semibold">Phone : {profile[0]?.phone}</p>
                        <p className='py-3 text-2xl font-semibold'><a href={profile[0]?.linkedin}>Linkedin</a></p>

                    </div>
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" class="peer" />
                <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content btn btn-primary">
                    Update Your Profile Information
                </div>
                <div class="collapse-content bg-secondary text-primary-content peer-checked:bg-white peer-checked:text-primary-content">
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
                </div>
            </div>

        </div>
    );
};

export default MyProfile;