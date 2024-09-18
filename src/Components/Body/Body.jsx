import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Body = () => {
  return (
    <div>
      <section id="about">
        <About />
      </section>
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
