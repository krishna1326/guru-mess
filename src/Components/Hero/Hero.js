import React from 'react';
import './Hero.css';

import cart from '../../Assets/cart.svg';
// import hero from '../../Assets/hero.jpg';
// import hero1 from '../../Assets/hero1.jpg';
// import hero2 from '../../Assets/hero1.jpg';


const Hero = () => {
  return (
    <div className='hero container'>
    {/* slideingAnimation="left_to-right"
    orientation='horizontal'
    initialSlide={1}
    onBeforeChange={(previousSlide,nextSlide) => console.log("onBeforeChange",previousSlide,nextSlide)}
    onChange={nextSlide => console.log("onChange",nextSlide)}
    onAfterChange={nextSlide => console.Console.log("onAfterChange",nextSlide)}
    style={{
      backgroundColor: "rgba(0, 0, 0,0.33)"
    }}
    settings={{
      slidingDuration:250,
      slidingDelay: 100,
      shouldAutoplay:true,
      shouldDisplayButtons:true,
      autoplayDuration: 5000,
      height: "100vh"
    }}
    >
      <Slide background={{
        backgroundImage: `url(${hero})`,
        backgroundAttachment: "fixed"
      }}/>
      <Slide background={{
        backgroundImage: `url(${hero1})`,
        backgroundAttachment: "fixed"
      }}/>
      <Slide background={{
        backgroundImage: `url(${hero2})`,
        backgroundAttachment: "fixed"
      }}/> */}
      <div className='hero-text'>
        <h1>Tasty and Healthy</h1>
        <p>We pride ourselves on offering a delectable array of Indian cuisine that not only tantalizes your taste buds but also nourishes your body. Prepared with the freshest ingredients and authentic spices, our dishes are bursting with flavor while maintaining their nutritional value.</p>
        <button className='btn'>Order Now <img src={cart} alt='' /></button>
      </div>
    </div>
  );
};

export default Hero;
