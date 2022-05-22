import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/')
    }
    return (
        <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-primary '>Continue With Google</button>
    );
};

export default SocialLogin;