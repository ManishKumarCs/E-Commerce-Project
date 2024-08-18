import React from 'react';
function Loading(){
  return(
    <div className="flex gap-3 m-5 p-5 justify-center items-center min-h-screen">
      <div className="border-4 border-black rounded-full p-4 border-b-red-400 animate-spin"></div>
      <h1 className="text-4xl font-bold font-serif animate-pulse">Loading...</h1> 
    </div>
  );
}
export default Loading;