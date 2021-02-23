import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [locations, setLocations] = useState([]);
  const [locationInfo, setLocationInfo] = useState({
    city: '',
    state: '',
    country: '',
    current: {},
    forcast: [],
    history: []

  });

  return (
    <div className="App">
      PLACEHOLDER
    </div>
  );
}

export default App;
