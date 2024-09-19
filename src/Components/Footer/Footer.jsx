import React from 'react';
import '../../styles/footer.css';
import git from '../../assets/git.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">Conéctate conmigo en:</p>
      <ul className="footer-links">
        <li>
          <a
            href="https://www.linkedin.com/in/pablomartinescudero/"
            className="footer-link"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/escu-git"
            className="footer-link"
            target="_blank"
          >
            <img src={git} alt="git" />
          </a>
        </li>
      </ul>
      <p className="footer-copy">&copy; 2024 Escudero Pablo Martín</p>
    </footer>
  );
};

export default Footer;
