import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import { getStates, getCities, getLocationData } from '../../apiCalls';
import './App.css';

const App = () => {
  const [faqDisplay, setFaqDisplay] = useState(false);
  const [availableStates, setAvailableStates] = useState([]);
  const [state, setState] = useState('');
  const [availableCities, setAvailableCities] = useState([]);
  const [city, setCity] = useState('');
  const [locationData, setLocationData] = useState(null);

  const toggleFaq = () => {
    setFaqDisplay(!faqDisplay)
  }

  useEffect(async () => {
    setAvailableStates(await getStates())
  }, [])

  useEffect(async () => {
    if (state) {
      setAvailableCities(await getCities(state))
    }
  }, [state])

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
