import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import auth from '../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-primary text-3xl'>Dashboard</h2>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {!admin && <li><Link to='/dashboard'>My Orders</Link></li>}
                        {!admin && <li><Link to='/dashboard/add-review'>Add A Review</Link></li>}
                        <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                        {admin && <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>}
                        {admin && <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;