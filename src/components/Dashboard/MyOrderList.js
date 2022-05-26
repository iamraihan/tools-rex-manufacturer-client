import { Link } from "react-router-dom";

const MyOrderList = ({ order, index, setDeleteOrder }) => {
    const { _id, productName, quantity, price, paid, transactionId } = order
    console.log(order);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>{index + 1}</th>
                            <td>{productName}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>
                                {
                                    paid ? <div className="flex"><h2> trnsId: {transactionId}</h2><h2 className="btn btn-success ml-5">Paid</h2></div> : <Link to={`/dashboard/payment/${_id}`}> <button className='btn btn-warning mr-3'>Pay</button></Link>
                                }
                                {
                                    !paid && <label onClick={() => { setDeleteOrder(order) }} htmlFor="order-delete-confirmation" className="btn btn-error">Cancel</label>
                                }

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrderList;