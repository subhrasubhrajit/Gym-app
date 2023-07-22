import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import Logo from '../images/logo.png'
import { AiOutlineBars } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)


    return (
        <nav>
            <div className='container nav_container'>
                <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt='Nav Logo' />
                </Link>
                <ul className={`nav_links ${isNavShowing ? 'show_Nav' : 'hide_Nav'}`}>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='nav_toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                    {isNavShowing ? <AiOutlineClose /> : <AiOutlineBars />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar
