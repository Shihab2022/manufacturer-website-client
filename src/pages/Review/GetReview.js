import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import parralex from '../../assets/img/parralex.jpg'
import auth from '../../firebase.init';
const GetReview = () => {
  const [user]=useAuthState(auth)
    return (
        <div style={{ backgroundImage: `url(${parralex})` }} className='h-[80vh] flex justify-center items-center'>
          <div class="card w-96 bg-base-100 shadow-2xl">
  <div class="card-body">
  <form action="">
  <input type="text"  name='name' value={user?.displayName} disabled class="input input-bordered w-full max-w-xs" />
    <input type="text" name='email' value={user?.email} disabled class="input my-5 input-bordered w-full max-w-xs" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <textarea class="textarea textarea-bordered w-full max-w-xs mt-5" placeholder="Write some text here .. "></textarea>
    <input type="submit" placeholder="Type here" class="input text-white text-xl mt-3 bg-[#002341] input-bordered w-full max-w-xs" />
  </form>
  
  </div>
</div>
        </div>
    );
};

export default GetReview;