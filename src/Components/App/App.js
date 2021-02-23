import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [faqDispay, setFaqDisplay] = useState(false);
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
