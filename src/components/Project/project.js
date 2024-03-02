import React ,{ useEffect }from 'react';
import './project.css'; 
import im from '../img/first.png' 
import im1 from '../img/NoGessingGame.png'
import im2 from '../img/classificationIcon.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'


// ProjectCard Component
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card" >
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <i className="fab fa-github"></i>
                </a>
            )}
        </div>
    );
};

// Project Component
const Project = () => {
    useEffect(()=>{
        Aos.init({duration:800});
    }, [])

    const projects = [
        {
            title: 'Completing Program pridiction',
            description: 'I developed a model to predict whether a student will complete the Tuwaiq program or not.',
            image: im2,
            github: 'https://github.com/Hj-lh/TuwaiqChallenge',
        },
        {
            title: 'Guessing Number Game',
            description: 'I developed a Guessing Number Game, a web-based application using JavaScript, HTML, and CSS, which challenges users to guess a unique sequence of four non-repeating digits.',
            image: im1,
            github: 'https://github.com/Hj-lh/Guessing-Number-Game',
        },
        {
            title: 'datathon',
            description: 'My team and I participated in a datathon, where we developed a machine learning model to accurately identify spam and ham emails.',
            image: im,
            github: 'https://github.com/Hj-lh/Datathon',
        },
    ];

    return (
        <section className="project-section" id='project' >
            <p>Some of my recent works</p>
            <h2 className='projectTitle'>Projects</h2>
            <div className="projects-container" data-aos='fade-down' data-aos-delay="200">
                {projects.map((project, index) => (
                    <div data-aos='fade-up' data-aos-delay={`${index * 200}`}>
                    <ProjectCard key={index} project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
