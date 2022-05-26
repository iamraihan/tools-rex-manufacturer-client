import React from 'react';

const DeleteOrderConfirmation = ({ deleteOrder, setDeleteOrder }) => {
    const { _id, productName } = deleteOrder
    const deleteHandler = id => {
        fetch(`https://salty-lake-19490.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log('delete data', data);
                setDeleteOrder(null)
            })
    }
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <label for="order-delete-confirmation" className="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="order-delete-confirmation" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure want to cancel {productName}</h3>
                    <p className="py-4">If you sure want to cancel your {productName} so click yes! </p>
                    <div className="modal-action">
                        <button onClick={() => deleteHandler(_id)} className='btn btn-error'>Yes</button>

                        <label htmlFor="order-delete-confirmation" className="btn btn-success">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderConfirmation;