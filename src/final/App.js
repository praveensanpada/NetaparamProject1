import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Heading from './Heading'
import MainNavBar from './MainNavBar'
import Slider from './Slider'
import TopFav from './TopFav'
import Q1 from './Q1'
import Q2 from './Q2'
import Q3 from './Q3'
import Q4 from './Q4'
import LPost from './LPost'
import Footer from './Footer'

const  App = () => {

  return (
    <>
        <Heading/>
        <MainNavBar/>
        <Slider/>
        <TopFav/>
        <Q1/>
        <br/>
        <Q2/>
        <br/>
        <Q3/>
        <br/>
        <Slider/>
        <br/>
        <Q4/>
        <br/>
        <LPost/>
        <br/>
        <Footer/>
    </>
  );
}

export default App;
