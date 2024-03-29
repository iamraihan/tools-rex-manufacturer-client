import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";
import PrimaryButton from "../Home/Shared/PrimaryButton";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [updateQuantity, setUpdateQuantity] = useState(0);
  // const [update, setUpdate] = useState(0)
  useEffect(() => {
    fetch(`https://tools-rex-backend.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id, updateQuantity]);
  // const updateQuantity = event => {
  //     event.preventDefault()
  //     const quantity = event.target.name.value
  //     setUpdate(quantity);

  // }
  // console.log(user);
  let errorUpdate;
  const updateHandler = (event) => {
    event.preventDefault();
    let quantity = parseInt(event.target.quantity.value);
    if (quantity <= product.available && product.minimum <= quantity) {
      setUpdateQuantity(updateQuantity + quantity);
    }

    // minimum = minimum + product.minimum
    // console.log(minimum);
    // console.log(product.minimum);
    // fetch(`https://tools-rex-backend.onrender.com/products/${id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ minimum: minimum }),
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('success', data);
    //         setUpdateQuantity(data)
    //     })
    // setUpdateQuantity(quantity)
    event.target.reset();
  };
  console.log(updateQuantity);
  const decreaseHandler = (event) => {
    event.preventDefault();
    let quantity = parseInt(event.target.quantity.value);
    if (product.minimum < updateQuantity + product.minimum) {
      console.log("inside");
      setUpdateQuantity(updateQuantity - quantity);
    } else {
      return;
    }
    // available = product.available - updateQuantity

    // console.log(available);
    // console.log(product.minimum);
    // fetch(`https://tools-rex-backend.onrender.com/products/${id}`, {
    //     method: 'PUT',
    //     body: JSON.stringify({ available: available }),
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('success', data);
    //         setUpdateQuantity(data)
    //         event.target.reset()
    //     })
    event.target.reset();
  };

  const confirmOrder = (event) => {
    event.preventDefault();
    const address = event.target.address.value;
    const phone = event.target.phone.value;

    // console.log(address, phone);
    const order = {
      userName: user?.displayName,
      email: user?.email,
      productName: product.name,
      quantity: product.minimum + updateQuantity,
      price: (
        (product.price / product.available) *
        (updateQuantity + product.minimum)
      ).toFixed(2),
      address: address,
      phone: phone,
    };
    console.log(order);
    fetch("https://tools-rex-backend.onrender.com/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${product.image})` }}
      className="py-12 bg-cover opacity-90"
    >
      <div className="card max-w-xl bg-base-100 shadow-xl image-full mx-auto">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="card-body">
          <h1 className="text-center text-2xl md:text-4xl mb-3 font-bold">
            Order Confirmation!!
          </h1>
          <h1 className="text-center font-semibold text-2xl">
            <span className="font-bold">Name:</span> {user?.displayName}{" "}
          </h1>
          <h1 className="text-center font-semibold text-2xl mb-3">
            <span className="font-bold">Email:</span> {user?.email}{" "}
          </h1>
          <h2 className="text-xl">
            <span className="font-bold">Product Name</span>: {product.name}
          </h2>
          <p className="text-xl">
            <span className="font-bold">Available:</span> {product.available}
          </p>
          <p className="text-xl">
            <span className="font-bold">My Quantity:</span>{" "}
            {product.minimum + updateQuantity}
          </p>

          <form className="flex items-center " onSubmit={updateHandler}>
            <div className="form-control w-2/4 max-w-xs">
              <label className="label">
                <span className="label-text">
                  <span style={{ color: ["#005c29"] }} className="font-bold">
                    Increase Quantity?
                  </span>
                </span>
              </label>
              <input
                type="number"
                placeholder="Increase Quantity"
                name="quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errorUpdate}
                {/* {<span className="label-text-alt">Alt label</span>} */}
              </label>
            </div>
            <div>
              <input
                className="btn btn-secondary btn-outline w-full  max-w-xs mt-5"
                type="submit"
                value="Increase Quantity"
              />
            </div>
          </form>
          {/* decrease  */}
          <form className="flex items-center " onSubmit={decreaseHandler}>
            <div className="form-control w-2/4 max-w-xs">
              <label className="label">
                <span className="label-text">
                  <span style={{ color: ["#005c29"] }} className="font-bold">
                    Decrease Quantity?
                  </span>
                </span>
              </label>
              <input
                type="number"
                placeholder="Decrease Quantity"
                name="quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {/* {<span className="label-text-alt">Alt label</span>} */}
              </label>
            </div>
            <div>
              <input
                className="btn btn-secondary btn-outline w-full  max-w-xs mt-5"
                type="submit"
                value="Decrease Quantity"
              />
            </div>
          </form>

          <p className="text-xl">
            <span className="font-bold">Price:</span> $
            {(
              (product.price / product.available) *
              (updateQuantity + product.minimum)
            ).toFixed(2)}
          </p>
          <div className="card-actions justify-center">
            {/* Address Phone  */}
            <form className=" " onSubmit={confirmOrder}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">
                    <span style={{ color: ["#005c29"] }} className="font-bold">
                      Address
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
                {/* <label className="label">
                                {<span className="label-text-alt">Alt label</span>}
                            </label> */}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">
                    <span style={{ color: ["#005c29"] }} className="font-bold">
                      Phone
                    </span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
                {/* <label className="label">
                                {<span className="label-text-alt">Alt label</span>}
                            </label> */}
              </div>
              <div>
                <input
                  disabled={
                    updateQuantity + product.minimum > product.available
                  }
                  className="btn btn-primary w-full  max-w-xs mt-5"
                  type="submit"
                  value="Confirm Order"
                />
              </div>
            </form>

            {/* <PrimaryButton>Confirm Order</PrimaryButton> */}
            {/* <button disabled={(updateQuantity + product.minimum) > product.available} className="btn btn-primary">Confirm Order</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
