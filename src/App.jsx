// src/components/Home.js
import React from 'react';
import Banner from './components/introduction';
import Fetuses from './components/our_style';
import About from './components/about_us';
// import Brands from './components/brands';
// import TeamComponent from './components/teamComponent';
// import Gallery from './components/gallery';
// import Testimonial from './components/testimonial';
// import PricingComponent from './components/pricingComponent';
// import BlogsComponent from './components/blogsComponent';
// import InstagramGallery from './components/instagramGallery';
import { ScrollRestoration } from 'react-router-dom';
import Services from './components/our_services/Services';

const Home = () => {
  return (
    <>
      <div id="anasayfa"><Banner /></div>
      <div id="tarzımız"><Fetuses /></div>
      <div id="hakkımızda"><About /></div>
      <div id="servisler"><Services /></div>
      <ScrollRestoration />
    </>
  );
};

export default Home;
