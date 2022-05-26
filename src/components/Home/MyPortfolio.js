import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold mb-5">Raihan Ali</h1>
                        <h1 className="text-5xl font-bold">Web Developer</h1>
                    </div>
                </div>
            </div>
            <div className=' max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-3 gap-5 my-5'>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Raihan Ali</h2>
                            <p className='text-xl'>Master's In Economics</p>
                            <p className='text-xl'>Naogaon Govt.Collge</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Skill And Technology</h2>
                            <p className='text-xl'>Front End Skill: HTML, CSS, JavaScript</p>
                            <p className='text-xl'>Back End Skill: JavaScript, Node, Express</p>
                            <p className='text-xl'>Extra: Wordpress, Photoshop</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Best Project I have done.</h2>
                            <p className='text-xl'>Front End Skill: HTML, CSS, JavaScript</p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyPortfolio;