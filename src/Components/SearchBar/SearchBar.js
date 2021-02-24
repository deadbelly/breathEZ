import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

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

export default SearchBar
