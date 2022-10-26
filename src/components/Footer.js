import React from 'react';
import footerImg from '../assets/img/footerImg.webp'
const Footer = () => {
    return (
        <div className='bg-sky-900'>
        <footer className="footer py-10 px-32  text-white">
 
 <div>
   <span className="text-xl font-semibold">Services</span> 
   <p >Branding</p> 
   <p >Design</p> 
   <p >Marketing</p> 
   <p >Advertisement</p>
 </div> 
 <div>
   <span className="text-xl font-semibold">Company</span> 
   <p >About us</p> 
   <p >Contact</p> 
   <p >Jobs</p> 
   <p >Press kit</p>
 </div> 
 <div>
   <span className="text-xl font-semibold">Legal</span> 
   <p  >Terms of use</p> 
   <p >Privacy policy</p> 
   <p >Cookie policy</p>
 </div>
 <div>

   <img  data-default-width="450"
      height="100"
      width='300'
      data-default-height="100" src={footerImg} alt="" />
   
 </div> 
</footer>

        </div>

    );
};

export default Footer;