import { celsiusToFahr, mpsToMph } from './statConversions';

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

    return fetch('http://api.airvisual.com/v2/states?country=USA&key=eb15d9fb-58bc-47d9-acd8-799b10f06ee9')
      .then(response => apiCalls.checkResponse(response))
      .then(states => states.data.map(state => state.state))
  },

  getCities(state) {

    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=eb15d9fb-58bc-47d9-acd8-799b10f06ee9`)
      .then(response => apiCalls.checkResponse(response))
      .then(cities => cities.data.map(city => city.city))
  },

  getLocationData(state, city) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=eb15d9fb-58bc-47d9-acd8-799b10f06ee9`)
      .then(response => apiCalls.checkResponse(response))
      .then(data => apiCalls.cleanData(data.data))
  },

  getNearestData() {
    return fetch('http://api.airvisual.com/v2/nearest_city?key=eb15d9fb-58bc-47d9-acd8-799b10f06ee9')
      .then(response => apiCalls.checkResponse(response))
      .then(data => apiCalls.cleanData(data.data))
  }
}

const { getStates, getCities, getLocationData, getNearestData } = apiCalls;

export { getStates, getCities, getLocationData, getNearestData };
