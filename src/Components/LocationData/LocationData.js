import React from 'react';
import { aqiRating } from '../../statConversions';
import iconPaths from '../../iconPaths'

const LocationData = ({data}) => {
  const rating = aqiRating(data.aqi)

  const src = iconPaths[data.ic]
  return (
    <div className='locationData'>
      <div className='wrapper'>
        <h1>{data.city}, {data.state}</h1>
        <h1
          className='aqi-score'>AQI {data.aqi} -
          <span className={rating.toLowerCase()}> {rating}</span>
        </h1>
      </div>
      <div>
        <img className='weather-icon' src={src} alt='weather icon' />
      </div>
      <div className='wrapper'>
        <h2>Temperature: <b className='location-bold'>{data.tp}˚F</b></h2>
        <h2>Wind Speed: <b className='location-bold'>{data.ws}mph</b></h2>
        <h2>Humidity: <b className='location-bold'>{data.hu}%</b></h2>
      </div>
    </div>
  )
}

export default LocationData;
