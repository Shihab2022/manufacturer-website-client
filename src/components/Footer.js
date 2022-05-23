import React from 'react';
import footerImg from '../assets/img/footerImg.png'
const Footer = () => {
    return (
        <div className='bg-[#002341]'>
        <footer className="footer py-10 px-32  text-white">
 
 <div>
   <span className="footer-title">Services</span> 
   <a className="link link-hover">Branding</a> 
   <a className="link link-hover">Design</a> 
   <a className="link link-hover">Marketing</a> 
   <a className="link link-hover">Advertisement</a>
 </div> 
 <div>
   <span className="footer-title">Company</span> 
   <a className="link link-hover">About us</a> 
   <a className="link link-hover">Contact</a> 
   <a className="link link-hover">Jobs</a> 
   <a className="link link-hover">Press kit</a>
 </div> 
 <div>
   <span className="footer-title">Legal</span> 
   <a className="link link-hover">Terms of use</a> 
   <a className="link link-hover">Privacy policy</a> 
   <a className="link link-hover">Cookie policy</a>
 </div>
 <div>

   <img src={footerImg} alt="" />
   
 </div> 
</footer>

        </div>

    );
};

export default Footer;