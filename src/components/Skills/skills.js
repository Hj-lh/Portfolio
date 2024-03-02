// Skills.js
import './skills.css';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiTensorflow, SiPytorch } from 'react-icons/si';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Skills = () => {
    useEffect(()=>{
        Aos.init({duration:500});
    }, [])
    return (
        <section id='skills' >
            <div className='skillsContainer' data-aos='fade-right' data-aos-delay="450">
                <div className='skillsText'>
                    <h2>My Skills</h2>
                    <p className='parskills'>I use these different programming languages and libraries to create my projects while continuously learning and striving to expand my knowledge.</p>
                </div>
                <div className='skillsIcons' data-aos='fade-left' data-aos-delay="450">
                    <FaPython className='icon' />
                    <SiTensorflow className='icon' />
                    <SiPytorch className='icon' />
                    <FaJs className='icon' />
                    <FaHtml5 className='icon' />
                    <FaCss3Alt className='icon' />
                    <FaReact className='icon' />
                </div>
            </div>
        </section>
    );
}

export default Skills;
