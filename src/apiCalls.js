const wait = delay => new Promise(resolve => setTimeout(resolve, delay));

const apiCalls = {
  getStates() {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=568b7a67-472c-4e0a-8818-ca1055fc0494')
      .then(response => response.json())
  },

  getCities(state) {
    return fetch(`http://api.airvisual.com/v2/cities?state=${state}&country=USA&key=568b7a67-472c-4e0a-8818-ca1055fc0494`)
      .then(response => response.json())
  },

  getCityData(state, city) {
    return fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=568b7a67-472c-4e0a-8818-ca1055fc0494`)
      .then(response => response.json())
  }
}

export default apiCalls;
