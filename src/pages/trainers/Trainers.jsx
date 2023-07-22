import React from 'react'
import './trainers.css'
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from '../../component/Tariner'

const Trainers = () => {
  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis optio fugit sapiente iusto mollitia debitis eum rem nostrum quae maiores.
      </Header>
      <section className="tariners">
        <div className="container trainers_container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebook/>, link: socials[2]},
                  {icon: <FaLinkedinIn/>, link: socials[3]} 
                ]
              }>

              </Trainer>
            })
          }
        </div>
      </section>
    
    </>
  )
}

export default Trainers
