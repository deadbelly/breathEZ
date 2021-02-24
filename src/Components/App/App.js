import React, { useState } from 'react';
import Header from '../Header/Header';
import './App.css';

const App = () => {
  const [faqDisplay, setFaqDisplay] = useState(false);
  const [locations, setLocations] = useState([]);
  const [locationInfo, setLocationInfo] = useState({
    city: '',
    state: '',
    country: '',
    current: {},
    forcast: [],
    history: []
  });

  const toggleFaq = () => {
    setFaqDisplay(!faqDisplay)
  }

  return (
    <div className="App">
      <Header toggleFaq={toggleFaq}/>
    </div>
  );
}

export default App;
