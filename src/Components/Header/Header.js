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
    Home
    </Link>
  )

  return (
    <header>
      <h1>BreathEZ</h1>
      {link}
    </header>
  )
};


export default Header;
