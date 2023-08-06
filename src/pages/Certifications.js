import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/certifications';

import SideBar from '../components/Template/SideBar';

const Certification = () => (
  <Main
    title="Certifications"
    description="Learn about Luke Cutting's certifications."
  >
    <div id="wrapper">
    
    <article className="post" id="certifications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/certifications">Certifications</Link></h2>
          <p>A selection of certifications I have received.</p>
        </div>
      </header>
      {data.map((cert) => (
        <Cell
          data={cert}
          key={cert.title}
        />
      ))}
    </article>
    <SideBar />
    </div>
  </Main>
);

export default Certification;
