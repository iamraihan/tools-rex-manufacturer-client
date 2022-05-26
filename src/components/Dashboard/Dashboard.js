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
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className='text-primary text-3xl'>Dashboard</h2>
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {!admin && <li><Link to='/dashboard'>My Orders</Link></li>}
                        {!admin && <li><Link to='/dashboard/add-review'>Add A Review</Link></li>}
                        <li><Link to='/dashboard/my-profile'>My Profile</Link></li>
                        {admin && <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>}
                        {admin && <li><Link to='/dashboard/manage-products'>Manage Products</Link></li>}
                        {admin && <li><Link to='/dashboard/add-product'>Add A Product</Link></li>}
                        {admin && <li><Link to='/dashboard/manage-all-orders'>Manage All Orders</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;