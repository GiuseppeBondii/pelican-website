import React from 'react';
import Hero from './Hero';
import ProjectSummary from './ProjectSummary';
import KeyNumbers from './KeyNumbers';
import MapCenters from './MapCenters';
import NewsSection from './NewsSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectSummary />
      <KeyNumbers />
      <MapCenters />
      <NewsSection />
    </div>
  );
};

export default Home;

//TODO: quando carico e ricarico la pagina mi da error 404
//      devo fare una pagina di error 404
//      condividere ad Andrea