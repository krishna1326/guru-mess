import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Logo.svg'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Food</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar