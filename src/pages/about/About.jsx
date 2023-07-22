import React from 'react'
import './about.css'
import Header from '../../component/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
    return (
        <>
            <Header title='About Us' image={HeaderImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ex quaerat eveniet necessitatibus quam ullam excepturi quisquam nesciunt quis. Porro!
            </Header>
            <section className="about_story">
                <div className="container about_story-container">
                    <div className="about_section-image">
                        <img src={StoryImage} alt="Our story Pic" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam quaerat tenetur, corrupti doloremque commodi sint quisquam magni, ipsa perferendis soluta nobis eos ullam suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint deleniti veniam! Cum atque perspiciatis, illum dolorem praesentium voluptatem ducimus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dicta quaerat delectus ad aperiam quo.</p>
                    </div>
                </div>
            </section>

            <section className="about_Vision">
                <div className="container about_Vision-container">
                    <div className="about_section-content">
                        <h1>Our Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam quaerat tenetur, corrupti doloremque commodi sint quisquam magni, ipsa perferendis soluta nobis eos ullam suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint deleniti veniam! Cum atque perspiciatis, illum dolorem praesentium voluptatem ducimus.</p>
                    </div>
                    <div className="about_section-image">
                        <img src={VisionImage} alt="Our Vision Pic" />
                    </div>
                </div>
            </section>

            <section className="about_mission">
                <div className="container about_mission-container">
                <div className="about_section-image">
                        <img src={MissionImage} alt="Our Vision Pic" />
                    </div>
                    <div className="about_section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam quaerat tenetur, corrupti doloremque commodi sint quisquam magni, ipsa perferendis soluta nobis eos ullam suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint deleniti veniam! Cum atque perspiciatis, illum dolorem praesentium voluptatem ducimus.</p>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default About
