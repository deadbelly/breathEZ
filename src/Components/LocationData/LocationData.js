import React from 'react';
import './LocationData.css'
import { celsiusToFahr, mpsToMph, aqiRating } from '../../statConversions';
import iconPaths from '../../iconPaths'

const LocationData = ({data}) => {
  const rating = aqiRating(data.current.pollution.aqius)

  const src = iconPaths[data.current.weather.ic]
  return (
    <div className='locationData'>
      <h1>{data.city}, {data.state}</h1>
      <h1 className={rating.toLowerCase()}>AQI {data.current.pollution.aqius} - {rating}</h1>
      <img className='weather-icon' src={src} />
      <h2>Temperature: {celsiusToFahr(data.current.weather.tp)}˚F</h2>
      <h2>Wind Speed: {mpsToMph(data.current.weather.ws)}mph</h2>
      <h2>Humidity: {data.current.weather.hu}%</h2>
    </div>
  )
}

export default LocationData;
