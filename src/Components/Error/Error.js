import React from 'react';
import './Error.css'

const Error = errDets => (
  <div className='error'>
    <h1>Sorry!</h1>
    {errDets.status && <h2>{errDets.status}</h2>}
    {errDets.status.toString()[0] === 4 && <h2>Something went wrong!</h2>}
    {errDets.status.toString()[0] === 5 && <h2>Something went wrong with the server!</h2>}
    <h3>Please try again later!</h3>
  </div>
)

export default Error;
