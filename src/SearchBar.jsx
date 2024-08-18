import React from 'react';

function SearchBar(props) {
  return (
    <input 
      value={props.search}
      className="border border-gray-400 bg-gray-100 sm:w-2/6 h-10 rounded p-2" onChange={props.handleChange}
      placeholder="Search Products"/>
  );
}

export default SearchBar;