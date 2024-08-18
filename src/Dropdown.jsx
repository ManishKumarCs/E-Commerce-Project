import React from 'react';

function Dropdown(props) {
  return (
    <select 
      value={props.sort}
      onChange={props.handleSort}
      className="border border-gray-400 bg-gray-100 p-2 sm:w-2/6 md:w-1/6">
      <option value="default">Default sorting</option>
      <option value="title">Sort By Title</option>
       <option value="price-low-high">Sort By Price : Low to High</option>
       <option value="price-high-low">Sort By Price : High to Low</option>
     </select>
  );
}
export default Dropdown;