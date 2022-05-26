import React from 'react';
import BusinessSummery from './BusinessSummery';
import Products from './Products';
import Reviews from './Reviews';
import PrimaryButton from './Shared/PrimaryButton';

const Home = () => {
    return (
        <div>
            {/* <div class="hero min-h-screen bg-gradient-to-r from-blue-500 to-green-300">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='flex-1  '>
                        <img src="https://images.unsplash.com/photo-1623161551706-318825cd18ef?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965" class="max-w-sm rounded-lg shadow-2xl" />

                    </div>
                    <div className='flex-1'>
                        <p class="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <h1 class="text-5xl font-bold py-6">High Quality Tools!</h1>
                        <PrimaryButton>Shop Now</PrimaryButton>
                    </div>
                </div>
            </div> */}

            <div className='min-h-screen bg-gradient-to-r from-blue-500 to-green-300'>
                <div className='grid md:grid-cols-2 gap-5 hero-content justify-center items-center h-screen w-full mx-auto'>
                    <div className=''>
                        <img src="https://images.unsplash.com/photo-1623161551706-318825cd18ef?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965" class="max-w-sm rounded-lg shadow-2xl" />

                    </div>
                    <div className='flex-1'>
                        <p class="">We Provide best Quality tools also we provide maximum time of guaranty of product. we try to serve you in best way as we can.</p>
                        <h1 class="text-5xl font-bold py-6">High Quality Tools!</h1>
                        <PrimaryButton>Shop Now</PrimaryButton>
                    </div>

                </div>
            </div>

            <div className='py-28'>
                <h2 className='text-center text-3xl uppercase font-semibold mb-'>Our Tools</h2>
                <Products></Products>
                <div className='text-center mt-5'>
                    <PrimaryButton>Load more tools</PrimaryButton>
                </div>
            </div>
            <div className='py-28'>
                <BusinessSummery></BusinessSummery>
            </div>
            <div className='py-16'>
                <h2 className='text-3xl font-bold text-center mb-12'>Customer Reviews</h2>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;