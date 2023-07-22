import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
    return (
        <>
            <header className='main_header'>
                <div className="container main_header-container">
                    <div className="main_header-left">
                        <h4>#100DaysOfWorkOut</h4>
                        <h1>join the legends of the fitness world</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam quibusdam cumque aliquam commodi! Aspernatur.</p>
                        <Link to='/plans' className='btn lg'>get started</Link>
                    </div>
                    <div className="main_header-right">
                        <div className="main_header-circle"></div>
                        <div className="main_header-image">
                            <img src={Image} alt="Main Header" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default MainHeader
