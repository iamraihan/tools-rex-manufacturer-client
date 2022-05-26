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
            {/* <label for="order-delete-confirmation" class="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="order-delete-confirmation" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure want to cancel {productName}</h3>
                    <p class="py-4">If you sure want to cancel your {productName} so click yes! </p>
                    <div class="modal-action">
                        <button onClick={() => deleteHandler(_id)} className='btn btn-error'>Yes</button>

                        <label for="order-delete-confirmation" class="btn btn-success">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrderConfirmation;