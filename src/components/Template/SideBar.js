import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Luke Cutting</h2>
        <p><a href="mailto:Luke.E.Cutting@gmail.com">Luke.E.Cutting@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Luke. I like building things.
      I&apos;m a <a href="https://www.upwork.com/freelancers/~012b93459496deb8fb" target="_blank" rel="noopener noreferrer">React Front-End Developer</a> and a <a href="https://www.upwork.com/freelancers/~012b93459496deb8fb" target="_blank" rel="noopener noreferrer">Microsoft Teams App Developer</a>. Previous to my freelance career, I was
                an <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a> Operations Manager.
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
  </section>
);

export default SideBar;
