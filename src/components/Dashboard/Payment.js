import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Home/Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0fLRKh4xVgSs665vSEwWGX5mNeOnaqAhi33YqJXRJFIqlcAFz1b7184H3IBiviG4hVMlrfNVcRkQQ8aaTR6bHQ002Tber6nH"
);

const Payment = () => {
  const { id } = useParams();
  // const [order, setOrder] = useState({})
  const url = `https://tools-rex-backend.onrender.com/orders/${id}`;
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(order);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-5">
        <div className="card-body">
          <h2 className="card-title">Hello {order.userName},</h2>
          <p className="text-xl">
            Please pay for{" "}
            <span className="text-primary font-bold">{order.productName}</span>
          </p>
          <p className="text-xl">
            You Need to pay <span className=" font-bold">{order.price}</span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
