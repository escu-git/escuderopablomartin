import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import '../../styles/body.css';
import Spots from '../../Commons/Spot';

const Body = () => {
  return (
    <div className={'bodyContainer'}>
      <Spots />
      <section id="about">
        <About />
      </section>
      <div className="spot" style={{ top: '10%', left: '5%' }}></div>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
