import {useEffect} from 'react';
import {withAlert} from './withProvider';

const themeMap = {
  success: {
    color: "text-green-400 ",
    backgroundColor: "bg-green-200 ",
    icon: "M16.972 6.251a1.999 1.999 0 00-2.72.777l-3.713 6.682-2.125-2.125a2 2 0 10-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 001.471-1.009l5-9a2 2 0 00-.776-2.72z"
  },
  error: {
    color: "text-red-400 ",
    backgroundColor: "bg-red-200 ",
    icon: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }
}


function Alert({alert, removeAlert}){
  useEffect(function(){
    if(alert){
      const cancelTimeout = setTimeout(removeAlert,3 * 1000);
      return cancelTimeout;
    }
  },[alert])
  if(!alert){
    return<></>;
  }
  const {type, message} = alert;
  const {color, backgroundColor, icon} = themeMap[type];
  return(
    <div className="w-full md:w-1/4 m-auto absolute left-0 right-0 top-0 bottom-0">
      <div className="flex flex-col p-4 rounded-lg shadow bg-white">
      <div className="flex flex-col items-center text-center">
        <div className={"inline-block p-4 rounded-full "+backgroundColor}>
        <svg className={"w-12 h-12 fill-current "+color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d={icon}/></svg>
        </div>
        <h2 className="mt-2 font-semibold text-gray-800">{message}</h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed"></p>
      </div>

      <div className="flex items-center mt-3">
        <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" onClick={removeAlert}>Dismiss</button>
        
      </div>
      </div>
    </div>
  )
}

export default withAlert(Alert);