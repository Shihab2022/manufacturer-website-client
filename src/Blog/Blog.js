import React from 'react';

const Blog = () => {
    return (
        <div className='lg:px-24 lg:py-10 p-5'>
            <div className='my-3'>
                <h1 className='text-2xl font-semibold my-2'>1. How will you improve the performance of a React Application?</h1>

          <div className='ml-5'>
          <p className='text-sm'> <span className='text-xl text-amber-500'>PureComponents : </span> Which internally uses the implementation of the shouldComponentUpdate function to reduce rendering time. This small but clever practice can greatly improve parent component load times. </p>
                <p className='text-sm my-2'> <span className='text-xl text-amber-500'>Immutable Data Structures : </span> Avoid directly modifying objects by making copies of the objects with the desired data changes. </p>
                <p className='text-sm'> <span className='text-xl text-amber-500'>Compression : </span> To load the client-side JavaScript load faster, compress the JavaScript code using Gzip or Brotli on the application server. This will allow faster fetching and serving, resulting in faster component loading and rendering times. </p>
          </div>
            </div>
            <div className='my-3'>
                <h1 className='text-2xl font-semibold my-2'>2. What are the different ways to manage a state in a React application?</h1>

          <div className='ml-5'>
          <p className='text-sm'> <span className='text-xl text-amber-500'>useReducer : </span> useReducer is an different ways to manage a state in a React application . Example :  <span className='text-sm text-amber-500'>const [state, dispatch] = useReducer(reducer, initialState); </span> </p>
          <p className='text-sm'> <span className='text-xl text-amber-500'>useStore : </span>If i use useStore firstly install <span className='text-sm text-amber-500'>npm install zustand </span> . After that, make a dedicated store file or folder and create your store . Example :  <span className='text-sm text-amber-500'>'const [votes,upvote,downvote ] = useStore();' </span> </p>
         
            
          </div>
            </div>
            <div className='my-3'>
                <h1 className='text-2xl font-semibold my-2'>3. How does prototypical inheritance work?</h1>

          <div className='ml-5'>
          <p className='text-sm'> The prototype is only used for reading properties.Write/delete operations work directly with the object. </p>
                <p className='text-sm my-2'>The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern .</p>
                <p className='text-sm'> JavaScript prototypes are different from other inheritance methodologies in that they allow for objects to inherit directly from other objects. </p>
          </div>
            </div>
        </div>
    );
};

export default Blog;