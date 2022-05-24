import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import PrimaryButton from './PrimaryButton';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <li className='ml-2'><NavLink to='/'>Home</NavLink></li>
        <li className='ml-2'><NavLink to='/about'>About</NavLink></li>
        <li className='ml-2'><NavLink to='/blog'>Blog</NavLink></li>
        <li className='ml-2'><NavLink to='/others'>Others</NavLink></li>
        {

            user && <li className='ml-2'><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        {
            user ? <button className='ml-2' onClick={logout}><PrimaryButton>Logout</PrimaryButton></button> : <Link to='/login'><PrimaryButton>Login</PrimaryButton></Link>
        }
    </>
    return (
        <div class="navbar max-w-screen-xl mx-auto">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-2xl">Tools Rex</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}


                </ul>
            </div>
            <div class="navbar-end">
                {/* {
                    user ? <button onClick={logout}><PrimaryButton>Logout</PrimaryButton></button> : <Link to='/login'><PrimaryButton>Login</PrimaryButton></Link>
                } */}
                <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;