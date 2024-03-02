import React, {useState} from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='navbar' data-aos='slide-right'>
        <div className="hamburgerMenu" onClick={toggleMenu}>
            <div className={isOpen ? 'bar open' : 'bar'}></div>
            <div className={isOpen ? 'bar open' : 'bar'}></div>
            <div className={isOpen ? 'bar open' : 'bar'}></div>
        </div>
        <div className={isOpen ? 'navMenu active' : 'navMenu'}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-270} className='navMenuItem' onClick={toggleMenu}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-270} className='navMenuItem' onClick={toggleMenu}>Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-150} className='navMenuItem' onClick={toggleMenu}>Project</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} className='navMenuItem' onClick={toggleMenu}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar