import React from 'react';

function Button({text}){

return(
  <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-1 rounded-md font-semibold m-2">{text}</button>
);
  
}

export default Button;