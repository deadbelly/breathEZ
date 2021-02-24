import React, { useState, useEffect } from 'react';
import './Selector.css';
import { getStates, getCities } from '../../apiCalls';

const Selector = () => {

  const [availableStates, setAvailableStates] = useState([]);
  const [state, setState] = useState('');
  const [availableCities, setAvailableCities] = useState([]);
  const [city, setCity] = useState('');

  useEffect(async () => {
    setAvailableStates(await getStates())
  }, [])

  useEffect(async () => {
    if (state) {
      setAvailableCities(await getCities(state))
    }
  }, [state])

  return (
    <form>
      <select onChange={event => setState(event.target.value)}>
        <option value=''>Select State</option>
        {availableStates.map(state => <option value={state}>{state}</option>)}
      </select>
    </form>
  )
}

export default Selector;