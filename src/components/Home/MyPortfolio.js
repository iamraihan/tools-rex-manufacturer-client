import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold mb-5">Raihan Ali</h1>
                        <h1 class="text-5xl font-bold">Web Developer</h1>
                    </div>
                </div>
            </div>
            <div className=' max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-3 gap-5 my-5'>

                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Raihan Ali</h2>
                            <p className='text-xl'>Master's In Economics</p>
                            <p className='text-xl'>Naogaon Govt.Collge</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Skill And Technology</h2>
                            <p className='text-xl'>Front End Skill: HTML, CSS, JavaScript</p>
                            <p className='text-xl'>Back End Skill: JavaScript, Node, Express</p>
                            <p className='text-xl'>Extra: Wordpress, Photoshop</p>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Best Project I have done.</h2>
                            <p className='text-xl'>Front End Skill: HTML, CSS, JavaScript</p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyPortfolio;