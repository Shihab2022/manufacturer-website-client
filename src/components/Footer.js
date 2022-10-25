import React from 'react';
import footerImg from '../assets/img/footerImg.webp'
const Footer = () => {
    return (
        <div className='bg-[#002341]'>
        <footer className="footer py-10 px-32  text-white">
 
 <div>
   <span className="footer-title">Services</span> 
   <p  className="link link-hover">Branding</p> 
   <p className="link link-hover">Design</p> 
   <p className="link link-hover">Marketing</p> 
   <p className="link link-hover">Advertisement</p>
 </div> 
 <div>
   <span className="footer-title">Company</span> 
   <p className="link link-hover">About us</p> 
   <p className="link link-hover">Contact</p> 
   <p className="link link-hover">Jobs</p> 
   <p className="link link-hover">Press kit</p>
 </div> 
 <div>
   <span className="footer-title">Legal</span> 
   <p className="link link-hover" alt=''>Terms of use</p> 
   <p className="link link-hover">Privacy policy</p> 
   <p className="link link-hover">Cookie policy</p>
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