import {Navigate} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import {withUser, withCart} from './withProvider'

function UserRoute({children, user, setUser, cartCount}){
  if(!user){
    return <Navigate to="/login"/>
  }
 return  <>
     <Header cartCount={cartCount} setUser={setUser}></Header>
   {children}
     <Footer/>
   </>
}

export default withUser(withCart(UserRoute));