import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Home/Shared/Loading";
import DeleteOrderConfirmation from "./DeleteOrderConfirmation";
import MyOrderList from "./MyOrderList";

const MyOrders = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const navigate = useNavigate();
  const email = user?.email;
  useEffect(() => {
    fetch(`https://tools-rex-backend.onrender.com/order/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [email, orders, navigate]);

  // const { data: orders, isLoading, refetch } = useQuery('order', () => fetch(`https://tools-rex-backend.onrender.com/order/${email}`, {

  //     method: 'GET',
  //     headers: {
  //         'content-type': 'application/json'
  //     },
  // }).then(res => res.json()));
  // if (isLoading) {
  //     return <Loading></Loading>
  // }
  return (
    <div>
      {orders.map((order, index) => (
        <MyOrderList
          key={order._id}
          order={order}
          index={index}
          setDeleteOrder={setDeleteOrder}
        ></MyOrderList>
      ))}
      {deleteOrder && (
        <DeleteOrderConfirmation
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
        ></DeleteOrderConfirmation>
      )}
    </div>
  );
};

export default MyOrders;
