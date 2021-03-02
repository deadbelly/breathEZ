const apiCalls = {
  getStates() {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=8b060d59-0210-4921-886d-d89f44fa1739')
      .then(response => response.json())
      .then(states => states.data.map(state => state.state))
  },

  getCities(state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=8b060d59-0210-4921-886d-d89f44fa1739`)
      .then(response => response.json())
      .then(cities => cities.data.map(city => city.city))
  },

  getLocationData(state, city) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=8b060d59-0210-4921-886d-d89f44fa1739`)
      .then(response => response.json())
      .then(data => data.data)
  }
}

const { getStates, getCities, getLocationData } = apiCalls

export { getStates, getCities, getLocationData };
