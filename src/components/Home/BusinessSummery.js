import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='bg-info py-8'>
            <div className='max-w-screen-xl mx-auto'>

                <h2 className='text-center mb-10 text-3xl font-semibold text-secondary'>Client Trust Us</h2>
                <div className='grid md:grid-cols-2'>
                    <div className='h-full'>
                        <img className='max-w-full md:w-3/4 rounded-lg flex justify-center items-center	' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171" alt="" />
                    </div>
                    <div>
                        <h2 className='text-center text-2xl'>Lets See Our Client Satisfaction</h2>
                        <div className='flex justify-between items-center h-full'>
                            <div>
                                <h1 className='text-3xl font-extrabold text-primary'>500+</h1>
                                <p className='text-xl text-secondary'>Happy Customer</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-extrabold text-primary'>120M+</h1>
                                <p className='text-xl text-secondary'>Annual revenue</p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-extrabold text-primary'>100+</h1>
                                <p className='text-xl text-secondary'>Customer Feedback</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card md:w-2/4 mx-auto mt-10 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Have any query?</h2>
                    <p>Contact Us.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Request for a quote</button>
                        <button class="btn btn-secondary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;