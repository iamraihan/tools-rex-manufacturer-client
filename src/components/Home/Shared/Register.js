import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
import auth from '../../firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';


const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user)
    let from = location.state?.from?.pathname || "/";
    if (loading || updating) {
        return <Loading></Loading>
    }
    let signError;
    if (error || updateError) {
        signError = <p className='text-error'><small>{error?.message}</small></p>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        reset()
    }
    return (
        <div className='flex h-screen justify-center items-center bg-accent'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Input Name Here" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {
                                    errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>
                                }
                                {
                                    errors.name?.type === 'pattern' && <span className="label-text-alt text-error">{errors.name.message}</span>
                                }

                            </label>
                        </div>
                        {/* Email field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Input Email Here" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Please input a valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {
                                    errors.email?.type === 'required' && <span className="label-text-alt text-error">{errors.email.message}</span>
                                }
                                {
                                    errors.email?.type === 'pattern' && <span className="label-text-alt text-error">{errors.email.message}</span>
                                }

                            </label>
                        </div>
                        {/* Password field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Input Password Here" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must input 6 character password or more!' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label">
                                {
                                    errors.password?.type === 'required' && <span className="label-text-alt text-error">{errors.password.message}</span>
                                }
                                {
                                    errors.password?.type === 'minLength' && <span className="label-text-alt text-error">{errors.password.message}</span>
                                }

                            </label>
                        </div>
                        {signError}
                        <input className='w-full max-w-xs btn btn-primary hover:text-white hover:bg-secondary' type="submit" value="SignUp" />

                        <p><small>Already Have an account? <Link className='text-primary font-bold' to='/login'> Please Login!</Link></small></p>


                    </form>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div >
    );
};

export default Register;