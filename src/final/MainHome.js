import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Heading from './Heading';
import MainNavBar from './MainNavBar';
import MidContent from './MidContent';
import Footer from './Footer';


const  MainHome = () => {

  return (
    <>
        <Heading/>
        <MainNavBar/>
        <br/>
        <MidContent/>
        <br/>
        <Footer/>
    </>
  );
}

export default MainHome;
