import React from 'react'
import './Footer.css'
import { FaWhatsapp, FaYoutube, FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';




const Footer = () => {
    return (
        <div className='footer container'>
            <div className='row-1'>
                <div className="about-1 footer-col">
                    <h4 className='heading'>FoodieWeb</h4>
                    <div className='content'>
                        <p>Indulge in a symphony of flavors, where each plate is a canvas for culinary excellence.</p>
                    </div>
                </div>

                <div className='link footer-col'>
                    
                    <h4 className='heading'>Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Testimonial</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                    
                    
                </div>

                <div className='menu footer-col'>
                    <h4>Menu</h4>
                    <ul>
                       <li><a href="/">Our Dishes</a></li>
                       <li><a href="/">Premium Menu</a></li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4 className='heading'>Contact Us</h4>
                    <ul>
                        <li><a href="/">Foodie@gmail.com</a></li>
                        <li><a href="/">+64 7708171867</a></li>
                        <li><a href="/">Social Media</a></li>
                    </ul>
                    <div className='social_logo'>
                    
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaWhatsapp />
      <FaYoutube />
      <FaEnvelope />
                    </div>
                
                </div>
            </div>



            <div className='copy row-2'>
                <p>
                &copy;copyright developed by <span>guru mess</span> | All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer