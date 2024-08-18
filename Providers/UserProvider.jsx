import {useContext, useState, useEffect} from 'react';
import {userContext} from '../src/Contexts';
import Loading from '../src/Loading'
import axios from 'axios'


function UserProvider({children}){
  const [loadingUser, setLoadingUser]=useState(true);
  const token = localStorage.getItem('user-token');
  const [user, setUser] = useState();
  useEffect(() =>{
    if(token){
      axios.get("https://myeasykart.codeyogi.io/me", {headers: {Authorization: token}}).then((response)=>{
        setUser(response.data);
        setLoadingUser(false);
      })
    }
    else{
      setLoadingUser(false);
    }  
  },[])
   if(loadingUser) return <Loading/>
  
 return  <>
     <userContext.Provider value={{isLoggedIn: !!token, user, setUser}}>
   {children}
     </userContext.Provider>
   </>
}

export default UserProvider;