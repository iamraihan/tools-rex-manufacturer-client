import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>  How will you improve the performance of a React Application?</h2>
                <p className='text-2xl'> specific patterns and methods you use to optimize  code.React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate. Caching functions,Web worker etc...</p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'> What are the different ways to manage a state in a React application?</h2>
                <p className='text-2xl'>There are four main types of state you need to properly manage in your React application

                    Local state
                    Global state
                    Server state
                    URL state
                    Local state is most often managed in React using the useState hook.
                    external server intrigante server state.
                    Global state is data we manage whole components.
                    url state like pathname query parameter
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'> How does prototypical inheritance work?</h2>
                <p className='text-2xl'>JavaScript is a prototype-based, Object Oriented programming language. its allowed after es6.
                    JavaScript is most common prottotype language.
                    prototypical inheritance in JavaScript is a powerful tool that saves a developer or coder many times.
                    In Javascript, every object has its own hidden, internal property, [[Prototype]]. We can access that [[Prototype]] using proto.
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>  Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='text-2xl'>React have lifecycle phase like Mounting Phase, Updating Phase, Unmounting Phase, when a component run first time it commonly use constructor
                    render
                    componentDidMount

                    when state change like prop basically Updating phase commonly use render and Updating
                    when delete something like this that time work Unmounting Phase . there is too many thing happens under react that why we use setProducts like this.
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='text-2xl'>
                    {/* const  result = products.filter(product => product.includes(mango)); */}
                </p>
            </div>
            <div className='max-w-screen-xl mx-auto border p-5 mt-5'>
                <h2 className='text-4xl font-bold mb-8'>  What is a unit test? Why should write unit tests?</h2>
                <p className='text-2xl'>JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML so unit test organized by test suit.
                    after starting project developer thinking how it work how it will be those for call unit test.
                </p>
            </div>
        </div>
    );
};

export default Blogs;