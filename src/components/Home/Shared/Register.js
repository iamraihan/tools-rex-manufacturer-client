import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex h-screen justify-center items-center bg-accent'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-semibold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name field  */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Input Name Here" class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required:
                                    {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                            />
                            <label class="label">
                                {
                                    errors.name?.type === 'required' && <span class="label-text-alt text-error">{errors.name.message}</span>
                                }
                                {
                                    errors.name?.type === 'pattern' && <span class="label-text-alt text-error">{errors.name.message}</span>
                                }

                            </label>
                        </div>
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
                                        message: 'Must input 6 character password or more!' // JS only: <p>error message</p> TS only support string
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

                        <input className='w-full max-w-xs btn btn-primary hover:text-white hover:bg-secondary' type="submit" value="Login" />

                        <p><small>Already Have an account? <Link className='text-primary font-bold' to='/login'> Please Login!</Link></small></p>


                    </form>
                    <div class="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div >
    );
};

export default Register;