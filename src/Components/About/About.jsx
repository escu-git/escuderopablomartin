import React from 'react';
import '../../styles/about.css';
import portrait from '../../assets/portrait.JPG';

const About = () => {
  return (
    <div className={'about-container'}>
      <p className={'about-text'}>
        Desarrollador Fullstack, apasionado por el conocimiento, la tecnología,
        el mundo del desarrollo y la transformación digital.
      </p>
      <img src={portrait} className={'portrait-pic'} alt="portrait pic" />
    </div>
  );
};

export default About;
