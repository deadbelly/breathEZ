import { celsiusToFahr, mpsToMph } from './statConversions';

const key = '780a2061-0d0a-46b6-b125-a45554434b74';

const apiCalls = {
  checkResponse(response) {
    if (response.ok) {
      return response.json()
    } else {
      throw response
    }
  },

  cleanData(data){
    return {
      state: data.state,
      city: data.city,
      aqi: data.current.pollution.aqius,
      ic: data.current.weather.ic,
      tp: celsiusToFahr(data.current.weather.tp),
      ws: mpsToMph(data.current.weather.ws),
      hu: data.current.weather.hu
    }
  },

  getStates() {
    return fetch(`https://api.airvisual.com/v2/states?country=USA&key=${key}`)
      .then(response => apiCalls.checkResponse(response))
      .then(states => states.data.map(state => state.state))
  },

  getCities(state) {
    return fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=USA&key=${key}`)
      .then(response => apiCalls.checkResponse(response))
      .then(cities => cities.data.map(city => city.city))
  },

  getLocationData(state, city) {
    return fetch(`https://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${key}`)
      .then(response => apiCalls.checkResponse(response))
      .then(data => apiCalls.cleanData(data.data))
  },

  getNearestData() {
    return fetch(`https://api.airvisual.com/v2/nearest_city?key=${key}`)
      .then(response => apiCalls.checkResponse(response))
      .then(data => apiCalls.cleanData(data.data))
  }
}

const { getStates, getCities, getLocationData, getNearestData } = apiCalls;

export { getStates, getCities, getLocationData, getNearestData, key };
