const apiCalls = {
  checkResponse(response) {
    if (response.ok) {
      return response.json()
    } else {
      throw response
    }
  },

  getStates() {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=13480d37-c37a-4013-aef2-8826ac3d8390')
      .then(response => apiCalls.checkResponse(response))
      .then(states => states.data.map(state => state.state))
  },

  getCities(state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=13480d37-c37a-4013-aef2-8826ac3d8390`)
      .then(response => apiCalls.checkResponse(response))
      .then(cities => cities.data.map(city => city.city))
  },

  getLocationData(state, city) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=13480d37-c37a-4013-aef2-8826ac3d8390`)
      .then(response => apiCalls.checkResponse(response))
      .then(data => data.data)
  },

  getNearestData() {
    return fetch('http://api.airvisual.com/v2/nearest_city?key=13480d37-c37a-4013-aef2-8826ac3d8390')
      .then(response => apiCalls.checkResponse(response))
      .then(data => data.data)
  }
}

const { getStates, getCities, getLocationData, getNearestData } = apiCalls

export { getStates, getCities, getLocationData, getNearestData };
