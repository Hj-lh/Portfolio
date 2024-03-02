import React, {useRef, useEffect} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Contact = () => {
    useEffect(()=>{
        Aos.init({duration:800});
    }, [])
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_d605vxq', 'template_j0mfq1i', form.current, '34lvrQUgUOGigZoYw')
        .then((result) => {
            console.log(result.text);
            alert('Thank you for reaching out! Your message has been sent successfully. ')
        }, (error) => {
            console.log(error.text);
        });
    };
    
  return (
    
    <section id='contact' >
        <h1 className='contactTitle' data-aos='fade-up'>Contact Me</h1>
        <div className='social' data-aos='fade-up'>
            <a href="https://www.linkedin.com/in/abdullah-alhajlah-066441222/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-linkedin"></i> 
            </a>
            <a href="https://github.com/Hj-lh" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-github"></i> 
            </a>
        </div>
        <div className='horizontal-line' data-aos='fade-up'></div>
        <form className='contactForm' ref={form} onSubmit={sendEmail} data-aos='fade-up'>
            <input type='text' className='name' placeholder='Name' name='user_name'/>
            <input type='email' className='email' placeholder='Email' name='user_email'/>
            <textarea className='msg' rows="5" placeholder='Message' name='message'></textarea>
            <button type='submit' className='submitBtn' value='Send'>Submit</button>
        </form>
    </section>
  )
}

export default Contact