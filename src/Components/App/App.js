import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import apiCalls from '../../apiCalls';
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

  useEffect(async () => {
    const states = await apiCalls.getStates()
    const cities = await apiCalls.getCities('')
    console.log(states.data, cities.data)
  }, [])

  return (
    <div className="App">
      <Header toggleFaq={toggleFaq}/>
    </div>
  );
}

export default App;
