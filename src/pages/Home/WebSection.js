import React from 'react';
import web from '../../assets/img/web.png'
import google from '../../assets/icon/google.png'
import seo from '../../assets/icon/seo.png'
import browser from '../../assets/icon/browser.png'
const WebSection = () => {
    // min-h-screen 
    return (
        <div className="hero py-14 bg-base-500">
  <div className="hero-content flex-col lg:px-10 lg:flex-row-reverse">
    <img src={web} alt='' className='lg:my-0 my-5'  />
    <div>

      <div className='flex justify-between'>
          <img src={google} className='border-2 border-zinc-300 p-3 h-20 w-20 rounded-full hover:shadow-lg' alt="" />
          <div className='ml-5'>
              <h1 className='font-bold '>GOOGLE RICH SNNIPPPET</h1>
              <p className='text-sm text-zinc-500'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
          </div>
      </div>
      <div className='flex justify-between my-8'>
          <img src={seo} className='border-2 border-zinc-300 p-3 h-20 w-20 rounded-full hover:shadow-lg' alt="" />
          <div className='ml-5'>
              <h1 className='font-bold '>SEO OPTIMIZED</h1>
              <p className='text-sm text-zinc-500'>Et harum quidem rerum facilis est et expedita disti namelia libero tempore cum soluta nobis est.</p>
          </div>
      </div>
      <div className='flex justify-between'>
          <img src={browser} className='border-2 border-zinc-300 p-3 h-20 w-20 rounded-full hover:shadow-lg' alt="" />
          <div className='ml-5'>
              <h1 className='font-bold '>COMPATIBLE WITH ALL BROWSERS</h1>
              <p className='text-sm text-zinc-500'>Molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt.</p>
          </div>
      </div>

    </div>
  </div>
</div>
    );
};

export default WebSection;