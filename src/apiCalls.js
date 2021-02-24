const apiCalls = {
  getStates() {
    return fetch('http://api.airvisual.com/v2/states?country=USA&key=568b7a67-472c-4e0a-8818-ca1055fc0494')
      .then(response => response.json())
  }
}

export default apiCalls;
