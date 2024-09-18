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
      <section>
        <div className={'title-container'}>
          <h2 className={'titles'}>Sobre mi</h2>
        </div>
        <div id="about">
          <About />
        </div>
      </section>
      <section id="projects">
        <div className={'title-container'}>
          <h2 className={'titles'}>Proyectos</h2>
        </div>
        <Projects />
      </section>
      <section id="contact">
        <div className={'title-container'}>
          <h2 className={'titles'}>Contacto</h2>
        </div>
        <Contact />
      </section>
    </div>
  );
};

export default Body;
