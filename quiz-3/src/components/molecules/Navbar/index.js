import React from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import Logo from './logo.png'

const Navbar = () => {
    return (
            <nav>
            <img className='logo' src={Logo} alt='Logo' />
                <ul>
                    <li><Link to="/"><p>Home</p></Link></li>
                    <li><Link to="/mobile-list"><p>Mobile List</p></Link></li>
                    <li><Link to="/about"><p>About</p></Link></li>
                </ul>
            </nav>
    )
}

export default Navbar