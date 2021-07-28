import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <MdSearch className='search-icon' size='1.3em' />
      <input type='text' placeholder='Search for notes' />
    </div>
  );
};

export default SearchBar;
