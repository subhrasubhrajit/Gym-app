import React from 'react'
import Image from '../images/values.jpg'
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import SectionHead from './SectionHead';
import Card from '../UI/Card';


const Values = () => {
    return (
        <section className='values'>
            <div className="container values_container">
                <div className="values_left">
                    <div className="values_image">
                        <img src={Image} alt="" />
                    </div>
                </div>
                <div className="values_right">
                    <SectionHead icon={<GiCutDiamond />} title='Values' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus totam quidem quibusdam.</p>
                    <div className="values_wrapper">
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return <Card key={id} className='values_value'>
                                    <span>{icon}</span>
                                    <p>{title}</p>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values
