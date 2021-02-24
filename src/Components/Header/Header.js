import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar.js';

const Header = () => (
  <div>
    <h1>BreathEZ</h1>
    <Link to='/faq'>FAQ</Link>
    <SearchBar />
  </div>
)

export default Header;
