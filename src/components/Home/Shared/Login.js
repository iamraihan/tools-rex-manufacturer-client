import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
import auth from '../../firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Loading></Loading>
    }
    let signError;
    if (error) {
        signError = <p className='text-error'><small>{error?.message}</small></p>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex h-screen justify-center items-center bg-accent'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-semibold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email field  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Input Email Here" class="input input-bordered w-full max-w-xs"
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
                            <label class="label">
                                {
                                    errors.email?.type === 'required' && <span class="label-text-alt text-error">{errors.email.message}</span>
                                }
                                {
                                    errors.email?.type === 'pattern' && <span class="label-text-alt text-error">{errors.email.message}</span>
                                }

                            </label>
                        </div>
                        {/* Password field  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Input Password Here" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must put 6 character password or more!' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label class="label">
                                {
                                    errors.password?.type === 'required' && <span class="label-text-alt text-error">{errors.password.message}</span>
                                }
                                {
                                    errors.password?.type === 'minLength' && <span class="label-text-alt text-error">{errors.password.message}</span>
                                }

                            </label>
                        </div>
                        {signError}
                        <input className='w-full max-w-xs btn btn-primary hover:text-white hover:bg-secondary' type="submit" value="Login" />

                        <p><small>New to doctors portal? <Link className='text-primary font-bold' to='/register'> Create an account</Link></small></p>


                    </form>
                    <div class="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div >
    );
};

export default Login;