import React from 'react';
import {Link} from 'react-router-dom'
function NotFound(){
  return(
    <div className="flex flex-col justify-center items-center py-16 max-w-6xl mx-auto">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/568/878/small/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space-site-crash-on-technical-work-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"/>
      <h1 className="text-4xl font-bold font-serif animate-pulse">Page Not Found 404 Error</h1> 
      <Link className="px-8 py-2 text-xl  border border-black hover:bg-rose-400 hover:text-white hover:border-none my-8 rounded-full " to="../">Go Back To Home</Link>
    </div>
     
  );
}
export default NotFound;