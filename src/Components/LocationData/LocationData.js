import React from 'react';
import './LocationData.css'

const LocationData = ({data}) => {
  

  return (
    <div>
      <h1>{data.city}, {data.state}</h1>

    </div>
  )
}

export default LocationData;
