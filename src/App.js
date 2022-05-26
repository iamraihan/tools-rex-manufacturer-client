import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddAProduct from './components/Dashboard/AddAProduct';
import AddaReview from './components/Dashboard/AddaReview';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageAllOrders from './components/Dashboard/ManageAllOrders';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Payment from './components/Dashboard/Payment';
import Home from './components/Home/Home';
import Footer from './components/Home/Shared/Footer';
import Login from './components/Home/Shared/Login';
import Navbar from './components/Home/Shared/Navbar';
import Register from './components/Home/Shared/Register';
import RequireAdmin from './components/Home/Shared/RequireAdmin';
import RequireAuth from './components/Home/Shared/RequireAuth';
import Purchase from './components/Purchase/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='add-review' element={<AddaReview></AddaReview>}></Route>
          <Route path='my-profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='make-admin' element={<RequireAdmin>
            <MakeAdmin></MakeAdmin>
          </RequireAdmin>}>
          </Route>
          <Route path='manage-products' element={<RequireAdmin>
            <ManageProducts></ManageProducts>
          </RequireAdmin>}>
          </Route>
          <Route path='add-product' element={<RequireAdmin>
            <AddAProduct></AddAProduct>
          </RequireAdmin>}>
          </Route>
          <Route path='manage-all-orders' element={<RequireAdmin>
            <ManageAllOrders></ManageAllOrders>
          </RequireAdmin>}>
          </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
