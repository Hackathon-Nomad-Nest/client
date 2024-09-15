import './style.css';

import VideoBackground from "src/components/VideoBackground";
import OurApproach from "src/components/OurApproach";
import AboutUs from 'src/components/AboutUs';
import React from 'react';

const Home = () => {
  return <div>
    <VideoBackground />
    <OurApproach />
    <AboutUs />

  </div>
};

export default React.memo(Home);
