import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';

const Home = () => {

  return (
    <>
      <Hero id='home' className="illustration-section-01" />
      
      <Testimonial id='work' topDivider />
      
      <FeaturesTiles id='skills' topDivider />
      
      <FeaturesSplit id='contact' invertMobile topDivider imageFill className="illustration-section-02" />
      {/*<Cta split />*/}
    </>
  );
}

export default Home;