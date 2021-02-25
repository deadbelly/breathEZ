import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({path}) => (
  <div>
    <h1>BreathEZ</h1>
    {path === '/' ? <Link to='/faq'>FAQ</Link> : <Link to='/'>Back to Home</Link>}
  </div>
);


export default Header;
