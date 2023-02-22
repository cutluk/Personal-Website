import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

import SideBar from '../components/Template/SideBar';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Luke Cutting via email @ Luke.E.Cutting.com"
  >
    <div id="wrapperextra">
      <div className="postextra">
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <a href="mailto:Luke.E.Cutting@gmail.com">Luke.E.Cutting@gmail.com</a>
      </div>
      <ContactIcons />
    </article>
    </div>
    <SideBar />
    
    </div>
  </Main>
);

export default Contact;
