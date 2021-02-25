import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>BreathEZ</h1>
    <Link to='/faq'>FAQ</Link>
    // this will be where the Search functionality will go
  </header>
)

export default Header;
