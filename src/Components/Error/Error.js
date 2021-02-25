import React from 'react';

const Error = ({status, statusText}) => (
  <div className='error'>
    <h1>Sorry!</h1>
    {status && <h2>{status}</h2>}
    {status.toString()[0] === '4' && <h2>{statusText}</h2>}
    {status.toString()[0] === '5' && <h2>{statusText}</h2>}
    <h3>Please try again later!</h3>
  </div>
)

export default Error;
