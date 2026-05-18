import React, { useContext } from 'react';
import Hero from './Hero';
import ProjectSummary from './ProjectSummary';
import KeyNumbers from './KeyNumbers';
import MapCenters from './MapCenters';
import NewsSection from './NewsSection';

const Home = () => {
  return (
    <div>
      <Hero /> {/*TODO: aggiungere Project Manager: Maria Vadalà*/}
      <ProjectSummary />
      <KeyNumbers />
      <MapCenters />
      <NewsSection />
    </div>
  );
};

export default Home;

