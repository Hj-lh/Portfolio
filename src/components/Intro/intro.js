import './intro.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Intro = () => {
  useEffect(()=>{
    Aos.init({duration:800});
}, [])
  return (
    <section id='intro'>
        <div className='introContent' >
            <span className='introText'>
                <span className='im' data-aos='fade-down' data-aos-delay="500">I'm</span>
                <span className='introName'><br/>Abdullah Alhajlah</span><br/> 
                <span className="major" data-aos='fade-down' data-aos-delay="500">a King Saud University Computer Engineering Student</span>
            </span>
            <p className='introP' data-aos='fade-in' data-aos-delay="500">
                with a passion for <span className='front'>front-end development</span> and <span className='ai'>AI</span>
            </p>
        </div>
    </section>
  );
}

export default Intro;
