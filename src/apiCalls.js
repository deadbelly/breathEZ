const apiCalls = {
  getStates() {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=568b7a67-472c-4e0a-8818-ca1055fc0494')
      .then(response => response.json())
      .then(states => states.data.map(state => state.state))
  },

  getCities(state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=568b7a67-472c-4e0a-8818-ca1055fc0494`)
      .then(response => response.json())
  },

  getLocationData(state, city) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=568b7a67-472c-4e0a-8818-ca1055fc0494`)
      .then(response => response.json())
  }
}

const { getStates, getCities, getLocationData } = apiCalls

export { getStates, getCities, getLocationData };
