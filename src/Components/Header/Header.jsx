import { React } from 'react';
import '../../styles/header.css';

const Header = () => {
  return (
    <header className={'mainHeader'}>
      <h1 className={'mainTitle'}>{'Escudero Pablo Martín'}</h1>
      <h2 className={'mainSubTitle'}>{'Desarrollador'}</h2>
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
