import { React } from 'react';
import '../../styles/header.css';

const Header = () => {
  return (
    <header className={'mainHeader'}>
      <h5 className={'mainTitle'}>{'Escudero Pablo Martín'}</h5>
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
