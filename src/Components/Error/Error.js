import React from 'react';

const Error = ({error}) => {
  console.log('ERROR', error)
  return (
    <div className='error'>
      <h1>{error.status}</h1>
      <h2>{error.statusText}</h2>
    </div>
  )
}

export default Error;
