import React from 'react';
import './Header.css';

import Faq from '../Faq/Faq.js';
import SearchBar from '../SearchBar/SearchBar.js';

const Header = () => (
  <div>
    <h1>BreathEZ</h1>
    <Faq />
    <SearchBar />
  </div>
)

export default Header;
