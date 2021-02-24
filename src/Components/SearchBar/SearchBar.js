import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const submitSearch = event => {
    // either the api call goes here for the specific location
    // or this passes the search state back up for the api call
    event.preventDefault();
    // this will be the main body, whether we call here or in App
    clearInputs();
  }

  const clearInputs = () => { 
    setSearch('');
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Enter place to search for here'
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      <button
        onClick={event => submitSearch(event)}
      >
        Search!
      </button>
    </form>
  )
}

export default SearchBar;
