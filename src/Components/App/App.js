import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './App.css';
import { getLocationData } from '../../apiCalls';
import Selector from '../Selector/Selector';

const App = () => {
  const [faqDisplay, setFaqDisplay] = useState(false);
  const [locationData, setLocationData] = useState(null);

  const toggleFaq = () => {
    setFaqDisplay(!faqDisplay)
  }

  // useEffect(async () => {
  //   if (city) {
  //     setLocationData(await getLocationData(state, city))
  //   }
  // }, [city])

  return (
    <div className="App">
      <Header toggleFaq={toggleFaq}/>
      <Selector />
    </div>
  );
}

export default App;
