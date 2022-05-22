import React from 'react';
import footerImg from '../assets/img/footerImg.png'
const Footer = () => {
    return (
        <div className='bg-[#002341]'>
        <footer class="footer py-10 px-32  text-white">
 
 <div>
   <span class="footer-title">Services</span> 
   <a class="link link-hover">Branding</a> 
   <a class="link link-hover">Design</a> 
   <a class="link link-hover">Marketing</a> 
   <a class="link link-hover">Advertisement</a>
 </div> 
 <div>
   <span class="footer-title">Company</span> 
   <a class="link link-hover">About us</a> 
   <a class="link link-hover">Contact</a> 
   <a class="link link-hover">Jobs</a> 
   <a class="link link-hover">Press kit</a>
 </div> 
 <div>
   <span class="footer-title">Legal</span> 
   <a class="link link-hover">Terms of use</a> 
   <a class="link link-hover">Privacy policy</a> 
   <a class="link link-hover">Cookie policy</a>
 </div>
 <div>

   <img src={footerImg} alt="" />
   
 </div> 
</footer>

        </div>

    );
};

export default Footer;