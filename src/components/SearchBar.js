import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className='search-bar'>
      <MdSearch className='search-icon' size='1.3em' />
      <input
        type='text'
        placeholder='Search for notes'
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
