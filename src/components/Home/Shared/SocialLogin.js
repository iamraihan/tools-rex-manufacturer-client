import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <button onClick={() => signInWithGoogle()} className='btn btn-outline btn-primary '>Continue With Google</button>
    );
};

export default SocialLogin;