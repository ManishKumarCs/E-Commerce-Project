import {useState, createContext, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import LoginPage from './LoginPage'
import ForgotPassword from './ForgotPassword'
import SignUp from './SignUp'
import AuthRoute from './AuthRoute'
import UserRoute from './UserRoute'
import NotFound from './NotFound'
import ProductList from './ProductList'
import ViewDetails from './ViewDetails'
import ThankYouPage from './ThankYouPage'
import Cart from './Cart'
import Alert from './Alert'
import UserProvider from '../Providers/UserProvider'
import AlertProvider from '../Providers/AlertProvider'
import CartProvider from '../Providers/CartProvider'

function App() {
 
 return(
  <>  
      <UserProvider>
      <CartProvider>
      <AlertProvider>
      <Alert />
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/" element={ <UserRoute><ProductList/></UserRoute>}/>
        <Route path="/viewDetails/:key/" element={<UserRoute><ViewDetails/></UserRoute>} />
        <Route path="/cart" element={<UserRoute><Cart/></UserRoute>} />  
        <Route path="/thankyou" element={<UserRoute><ThankYouPage/></UserRoute>} />  
        <Route path="*" element={<UserRoute><NotFound/></UserRoute>} />  
      </Routes>
      </AlertProvider>
      </CartProvider>
      </UserProvider>
    </>
);
}

export default App;