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
      getAndSetLocationData(state, city)
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
          <option value=''>None</option>
          {availableCities.length && eachCity()}
        </select>
      </label>
    </form>
  )
}

export default Selector;
