import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import SideBar from '../components/Template/SideBar';
/* Add <Site /> below Personal and import Site from '../components/Stats/Site';
 below import persona; */
const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Luke Cutting and lukecutting.com"
  >
    <div id="wrapperextra">
    <div className="postextra">
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/stats">Stats</Link></h2>
        </div>
      </header>
      <Personal />
    </article>
    </div>
    <SideBar />
    </div>
  </Main>
);

export default Stats;
