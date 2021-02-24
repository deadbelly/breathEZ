import React, { useState, useEffect } from 'react';
import './Selector.css';
import { getStates, getCities } from '../../apiCalls';

const Selector = ({getAndSetLocationData}) => {

  const [availableStates, setAvailableStates] = useState([]);
  const [state, setState] = useState('');
  const [availableCities, setAvailableCities] = useState([]);
  const [city, setCity] = useState('');

  const eachState = () => {
    return availableStates.map(state => <option value={state}>{state}</option>)
  }

  const eachCity = () => {
    return availableCities.map(city => <option value={city}>{city}</option>)
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
    <form>
      <select onChange={event => setState(event.target.value)}>
        <option value=''>Select State</option>
        {eachState()}
      </select>
      <select onChange={event => setCity(event.target.value)}>
        <option value=''>Select City</option>
        {availableCities.length && eachCity()}
      </select>
    </form>
  )
}

export default Selector;
