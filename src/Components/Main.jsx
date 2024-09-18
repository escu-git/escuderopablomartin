import { React } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Spots from '../Commons/Spot';

const Main = () => {
  return (
    <div>
      <Spots />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Main;
