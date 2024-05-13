import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CarouselPage from './components/ImagesSlider';
import MidSec1 from '../src/components/Middle'
ReactDOM.render(
  <>
  <Navbar/>
  <CarouselPage/>
  <MidSec1/>
  <Footer/>
    </>
  ,document.getElementById('root')
);
