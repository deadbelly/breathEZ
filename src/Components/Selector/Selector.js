import React, { useState, useEffect } from 'react';
import { getStates, getCities } from '../../apiCalls';

const Selector = ({getAndSetLocationData}) => {

  const [availableStates, setAvailableStates] = useState([]);
  const [state, setState] = useState('');
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
  }, [])

  useEffect(() => {
    if (state) {
      getCities(state)
        .then(cities => {
          setCity('');
          setAvailableCities(cities);
        })
    }
  }, [state])

  useEffect(() => {
    if (city) {
      getAndSetLocationData.call(null, state, city);
    }
  }, [city])

  return (
    <form className='form' >
      <label> Select State:
        <select onChange={event => setState(event.target.value)}>
          <option value=''>None</option>
          {eachState()}
        </select>
      </label>
      <label> Select City:
        <select onChange={event => setCity(event.target.value)}>
          <option value=''>{state? 'None' : 'Select a state'}</option>
          {eachCity()}
        </select>
      </label>
    </form>
  )
}

export default Selector;
