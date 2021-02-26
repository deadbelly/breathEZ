import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import { getLocationData } from '../../apiCalls';
import Selector from '../Selector/Selector';
import LocationData from '../LocationData/LocationData'
import Faq from '../Faq/Faq';

const App = () => {
  const [locationData, setLocationData] = useState(null);

  const getAndSetLocationData = async (state, city) => {
    setLocationData(await getLocationData(state, city))
  }

  return (
    <main className="App">
      <Route
        exact path='/faq'
        render={() => {
          return (
            <div>
              <Header />
              <Faq />
            </div>
          )
        }}
      />
      <Route
        exact path='/'
        render={props => {
          const path = props.match.path;
          return (
            <div>
              <Header path={path}/>
              <Selector
                getAndSetLocationData={getAndSetLocationData}
              />
              {locationData &&
              <LocationData data={locationData} />}
              {!locationData && <h1 className='empty-space'>Please select a State then a City to view the information</h1>}
            </div>
          )
        }}
      />
    </main>
  );
}

export default App;
