import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';
import MakeAdminDetails from './MakeAdminDetails';

const MakeAdmin = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        users.map((user, index) => <MakeAdminDetails key={user._id} user={user} index={index} ></MakeAdminDetails>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;