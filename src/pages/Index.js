import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import FadeIn from 'react-fade-in';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

import ContactIcons from '../components/Contact/ContactIcons';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Luke Cutting's personal website. Gainesville based University of Florida Student, "
    + 'Software Developer at Emerging Techonlgies'}
  >
     
    <div className="mainpage">
    <FadeIn transitionDuration={1100} delay={600}>
      
        <div className="title">
          <h2 className="titlefadein"><Link to="/">Welcome</Link></h2>
        </div>
        <div className="typewriter">
          <p>
          <Typewriter
              options={{
                strings: ['I\'m a software developer who thrives on challenging projects and is always seeking new ways to learn and improve my craft.',
                  'Please feel free to read more about me, check out my resume, projects, site statistics, or contact me!'],
                autoStart: true,
                loop: true,
                delay: 40,
                pauseFor: 8000,
                deleteSpeed: 10,
              }}
            />
            </p>
            </div>
      
          <section className="sidebarmainpage">
            <div className="picturemain">
            <section id="intro">
              <Link to="/" className="logo">
                <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
              </Link>
              <header>
                <h2 className='mainName'>Luke Cutting</h2>
                <p><a href="mailto:Luke.E.Cutting@gmail.com">Luke.E.Cutting@gmail.com</a></p>
              </header>
            </section>
            </div>
            <div className="aboutmain">
            <section className="blurbmain">
              <h2 className='abouttitle'>Hello</h2>
              <p className='maintext'>I&apos;m Luke, and I like building things.
                I&apos;m a Freelance Website Developer as well as a Software Engineer at <a href="https://emergingtech.co" target="_blank" rel="noopener noreferrer">Emerging Tech</a>. Previous to my position at Emerging Tech, I was
                an <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a> Operations Manager Intern.
              </p>
              <ul className="actions">
                <li>
                  {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
                </li>
              </ul>
            </section>
            
            <section id="footer">
              <ContactIcons />
              <p className="copyright">&copy; Luke Cutting <a href="mailto:Luke.E.Cutting@gmail.com">Luke.E.Cutting@gmail.com</a>.</p>
            </section>
            </div>
          </section>
          
        
        </FadeIn>
    </div>
    
  </Main>
);

export default Index;
