import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>BreathEZ</h1>
    <Link to='/faq'>FAQ</Link>
  </div>
)

export default Header;
