import React from 'react';
import { celsiusToFahr, mpsToMph, aqiRating } from '../../statConversions';
import iconPaths from '../../iconPaths'

const LocationData = ({data}) => {
  const rating = aqiRating(data.current.pollution.aqius)

  const src = iconPaths[data.current.weather.ic]
  return (
    <div className='locationData'>
      <h1>{data.city}, {data.state}</h1>
      <h1 
        className='aqi-score'>AQI {data.current.pollution.aqius} -
        <span className={rating.toLowerCase()}> {rating}</span>
      </h1>
      <img className='weather-icon' src={src} alt='weather icon' />
      <h2>Temperature: <b className='location-bold'>{celsiusToFahr(data.current.weather.tp)}˚F</b></h2>
      <h2>Wind Speed: <b className='location-bold'>{mpsToMph(data.current.weather.ws)}mph</b></h2>
      <h2>Humidity: <b className='location-bold'>{data.current.weather.hu}%</b></h2>
    </div>
  )
}

export default LocationData;
