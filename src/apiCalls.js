const apiCalls = {
  getStates() {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6')
      .then(response => response.json())
      .then(states => states.data.map(state => state.state))
  },

  getCities(state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6`)
      .then(response => response.json())
      .then(cities => cities.data.map(city => city.city))
  },

  getLocationData(state, city) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=6c462cce-4580-4d36-b154-0e6f353635c6`)
      .then(response => response.json())
      .then(data => data.data)
  }
}

const { getStates, getCities, getLocationData } = apiCalls

export { getStates, getCities, getLocationData };
