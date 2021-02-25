const statConversions = {
  celsiusToFahr(degreesC) {
    return Math.round(degreesC * 1.8 + 32);
  },

  mpsToMph(mps) {
    return (mps*2.237).toFixed(2);
  },

  aqiRating(aqi) {
    if (aqi < 50) {
      return 'GOOD';
    } else if (aqi < 100) {
      return 'MODERATE';
    } else if (aqi < 150){
      return 'RISKY';
    } else if (aqi < 200) {
      return 'UNHEALTHY';
    } else if (aqi < 300) {
      return 'VERY UNHEALTHY';
    } else {
      return 'HAZARDOUS';
    }
  }
}

const { celsiusToFahr, mpsToMph, aqiRating } = statConversions;

export { celsiusToFahr, mpsToMph, aqiRating };
