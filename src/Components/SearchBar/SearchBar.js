import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type='text'
        placeholder='Enter place to search for here'
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <button
      />
    </div>
  )
}

export default SearchBar
