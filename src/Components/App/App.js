import React, { useState } from 'react';
import { Route } from 'react-router-dom';
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

  const getAndSetLocationData = async (state, city) => {
    setLocationData(await getLocationData(state, city))
  }

  return (
    <div className="App">
      <Header toggleFaq={toggleFaq}/>
      <Route
        exact path='/'
        render={() => (
          <Selector 
            getAndSetLocationData={getAndSetLocationData}
          />
        )} 
      />
    </div>
  );
}

export default App;
