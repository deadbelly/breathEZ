import React from 'react';
import './LocationData.css'
import { celsiusToFahr, mpsToMph, aqiRating } from '../../statConversions';

const LocationData = ({data}) => {
  const rating = aqiRating(data.current.pollution.aqius)

  return (
    <div>
      <h1>{data.city}, {data.state}</h1>
      <h1 className={rating.toLowerCase()}>AQI {data.current.pollution.aqius} - {rating}</h1>
    </div>
  )
}

export default LocationData;
