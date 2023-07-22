import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <div className='container footer_container'>
                <span>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet laboriosam doloremque aperiam vitae pariatur ex incidunt debitis obcaecati quisquam.</p>
                    <div className='footer_socials'>
                        <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
                        <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookF /></a>
                        <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><BsTwitter /></a>
                        <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><BsInstagram /></a>
                    </div>
                </span>
                <span>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Planst</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </span>
                <span>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </span>
                <span>
                    <h4>Get In Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </span>
            </div>
            <div className="footer_copyright">
                <small>2023 MY REACT DEPLOY PRACTICE &copy; All Right Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
