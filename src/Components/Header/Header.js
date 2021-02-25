import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({path}) => {
  const link = path === '/' ? (
    <Link
      to='/faq'
      className='link'
    >
    FAQ
    </Link>
  ) : (
    <Link 
      to='/'
      className='link'
    >
    Back to Home
    </Link>
  )

  return (
    <header>
      <h1>BreathEZ</h1>
      <h2>{link}</h2>
    </header>
  )
};


export default Header;
