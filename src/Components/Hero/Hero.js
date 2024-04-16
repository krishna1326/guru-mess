import React from 'react'
import './Hero.css'
import cart from '../../Assets/cart.svg'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Tasty and Healthy</h1>
            <p>we pride ourselves on offering a delectable array of Indian cuisine that not only tantalizes your taste buds but also nourishes your body. Prepared with the freshest ingredients and authentic spices, our dishes are bursting with flavor while maintaining their nutritional value. </p>
            <button className='btn'>Order Now <img src={cart} alt='' /></button>
        </div>
        

    </div>
  )
}

export default Hero