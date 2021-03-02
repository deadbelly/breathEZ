import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Selector from '../Selector/Selector';
import LocationData from '../LocationData/LocationData'
import Faq from '../Faq/Faq';
import Error from '../Error/Error';

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null)

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
                setLocationData={setLocationData}
                setError={setError}
              />
              {locationData && !error &&
              <LocationData data={locationData} />}
              {error && <Error error={error}/>}
            </div>
          )
        }}
      />
    </main>
  );
}

export default App;
