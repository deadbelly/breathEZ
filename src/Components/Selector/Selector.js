import React, { useState, useEffect } from 'react';
import { getStates, getCities, getLocationData, getNearestData } from '../../apiCalls';

const Selector = ({setLocationData, setError}) => {

  const [availableStates, setAvailableStates] = useState([]);
  const [state, setState] = useState('Current Location');
  const [availableCities, setAvailableCities] = useState([]);
  const [city, setCity] = useState('');

  const eachState = () => {
    return availableStates.map((state, index) =>
      <option
        value={state}
        key={index}
      >
      {state}
      </option>
    )
  }

  const eachCity = () => {
    return availableCities.map((city, index) =>
      <option
        value={city}
        key={index}
      >
      {city}
      </option>
    )
  }

  useEffect(() => {
    getStates()
      .then(states => setAvailableStates(states))
        .catch(err => setError(err))
  }, [setError])

  useEffect(() => {
    if (state === 'Current Location') {
      setLocationData(null)
      getNearestData()
        .then(data => {
          setAvailableCities([])
          setLocationData(data)
        })
          .catch(err => setError(err))
    } else if (state) {
      getCities(state)
        .then(cities => {
          setAvailableCities(cities);
        })
          .catch(err => setError(err))
    }
  }, [state, setLocationData, setError])

  useEffect(() => {
    if (city !== '') {
      setLocationData(null)
      getLocationData(state, city)
        .then(data => setLocationData(data))
          .catch(err => setError(err))
    }
  }, [city, state, setLocationData, setError])

  return (
    <form className='form' >
      <label> Select State:
        <select value={state} onChange={event => {
          setCity('');
          setState(event.target.value);
        }}>
          <option value='Current Location'>Current Location</option>
          {eachState()}
        </select>
      </label>
      <label> Select City:
        <select value={city} onChange={event => setCity(event.target.value)}>
          <option value=''>{state? 'None' : 'Select a state'}</option>
          {eachCity()}
        </select>
      </label>
    </form>
  )
}

export default Selector;
