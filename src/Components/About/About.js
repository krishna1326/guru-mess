import React, { useEffect } from 'react';
import './About.css';
import about_img from '../../Assets/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease', 
    });
  }, []);

  return (
    <div className='about'>
      <div className="about-left" data-aos="fade-right">
        <img src={about_img} alt="" className='about-img' />
      </div>
      <div className="about-right" data-aos="fade-left">
        <h3>ABOUT OUR MESS</h3>
        <h2>Our Culinary Philosophy</h2>
        <p>
          Welcome to Guru Mess, where passion for food meets culinary expertise. Nestled in the heart of [insert location], Guru Mess is more than just a restaurant; it's a culinary journey crafted with love and devotion. Our mission is simple: to provide our customers with delicious, hearty meals made from the freshest ingredients, served with a side of warmth and hospitality.
        </p>
        <p>
          At Guru Mess, we believe that food is not just sustenance; it's an experience to be savored and shared. Our talented team of chefs draws inspiration from traditional recipes passed down through generations, infusing each dish with authentic flavors and innovative twists. Whether you're craving classic comfort food or bold, exotic flavors, our diverse menu has something to tantalize every palate.
        </p>
        <p>
          But Guru Mess is more than just a place to eat; it's a gathering spot for friends, families, and food enthusiasts alike. Our cozy ambiance and welcoming atmosphere create the perfect backdrop for memorable meals and lively conversations. Whether you're grabbing a quick bite on your lunch break or celebrating a special occasion, Guru Mess is your home away from home. Join us and discover why we're more than just a restaurant—we're a culinary destination.
        </p>
      </div>
    </div>
  );
};

export default About;
