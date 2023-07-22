import React from 'react'
import './contact.css'
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <Header title='Get In Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, distinctio.
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="nandysubhrajit12@gmail.com" target='blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://www.facebook.com/subhrajit.nandy.5/" target='blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="http://wa.me/+91-9748170968" target='blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
