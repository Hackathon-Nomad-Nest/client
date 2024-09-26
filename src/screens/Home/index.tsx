import './style.css';

import VideoBackground from 'src/components/VideoBackground';
import OurApproach from 'src/components/OurApproach';
import AboutUs from 'src/components/AboutUs';
import React from 'react';

const Home = () => {
  return (
    <>
      <VideoBackground />
      <OurApproach />
      <AboutUs />
    </>
  );
};

export default React.memo(Home);
