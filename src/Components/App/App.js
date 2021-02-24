import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import './App.css';

const App = () => {
  const [faqDisplay, setFaqDisplay] = useState(false);
  const [locationData, setLocationData] = useState(null);

  const toggleFaq = () => {
    setFaqDisplay(!faqDisplay)
  }

  useEffect(async () => {
    if (city) {
      setLocationData(await getLocationData(state, city))
    }
  }, [city])

  return (
    <div className="App">
      <Header toggleFaq={toggleFaq}/>
    </div>
  );
}

export default App;
