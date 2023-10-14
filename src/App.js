import { Route, Routes } from "react-router-dom";
import "swiper/css";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/index";
function App() {
  return (
    <div className="font-Nunito">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path='/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
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
        </Route> */}
        {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
