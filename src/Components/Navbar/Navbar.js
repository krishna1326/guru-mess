import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Logo.svg'


const Navbar = () => {
  return (
    <nav className='nav container'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Menu</a></li>
            <li><a href='/'>Testimonials</a></li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar