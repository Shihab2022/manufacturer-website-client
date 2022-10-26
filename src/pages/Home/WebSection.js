import React from 'react';
import web from '../../assets/img/web.webp'
import { FaGoogle ,FaGitter ,FaFirefoxBrowser} from "react-icons/fa";
const WebSection = () => {
    // min-h-screen 
    return (
        <div className="hero py-14 bg-base-500">
  <div className="hero-content flex-col lg:px-10 lg:flex-row-reverse">
    <img  data-default-width="450"
      height="100"
      width='500'
      data-default-height="100" data-aos="fade-down-left" src={web} alt='' className='lg:my-0 my-5'  />
    <div>

      <div data-aos="fade-down-right" className='flex justify-between'>
      <FaGoogle className='text-6xl '/>
          <div className='ml-5'>
              <h1 className='font-bold '>GOOGLE RICH SNNIPPPET</h1>
              <p >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
          </div>
      </div>
      <div data-aos="fade-right" className='flex justify-between my-8'>
      <FaGitter className='text-6xl'/>
          <div className='ml-5'>
              <h1 className='font-bold '>SEO OPTIMIZED</h1>
              <p >Et harum quidem rerum facilis est et expedita disti namelia libero tempore cum soluta nobis est.</p>
          </div>
      </div>
      <div data-aos="fade-down-right" className='flex justify-between'>
      <FaFirefoxBrowser className='text-6xl '/>
          <div className='ml-5'>
              <h1 className='font-bold '>COMPATIBLE WITH ALL BROWSERS</h1>
              <p >Molestias excepturi sint occaecati cupiditate non provident similique sunt in culpa qui officia deserunt.</p>
          </div>
      </div>

    </div>
  </div>
</div>
    );
};

export default WebSection;