import { Link } from "react-router-dom";

const MyOrderList = ({ order, index, setDeleteOrder }) => {
    const { _id, productName, quantity, price, } = order

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
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
                                <Link to={`/dashboard/payment/${_id}`}> <button className='btn btn-success mr-3'>Pay</button></Link>
                                <label onClick={() => { setDeleteOrder(order) }} for="order-delete-confirmation" class="btn btn-error">Cancel</label>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrderList;