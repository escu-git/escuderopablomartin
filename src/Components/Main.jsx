// Main.js
import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Spots from '../Commons/Spot';
import Toast from '../Commons/Toast';

const Main = () => {
  return (
    <div>
      <Spots />
      <Header />
      <Body />
      <Footer />
      <Toast />
    </div>
  );
};

export default Main;
