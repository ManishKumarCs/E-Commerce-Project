import {useState, useContext} from 'react';
import {Link,Navigate} from 'react-router-dom'
import {withFormik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import Input from "./Input";
import {withUser, withAlert} from './withProvider';

function submit(values,bag){
  axios.post("https://myeasykart.codeyogi.io/login",{email:values.email, password:values.password}).then((response)=>{
  const {user, token} = response.data;
  localStorage.setItem("user-token", token);
    console.log(bag)
  bag.props.setUser(user);
  bag.props.setAlert({message:"Login Successful", type:"success"})
  }).catch((error)=>{
    bag.props.setAlert({type:"error", message:"Invalid Credentials"});
  })
}
const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email address is required'),
  password: Yup.string().min(8).required('Password is required'),
});
const initialValues={
     email:"",
     password:"",
   }

export function LoginPage({
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  user
}){
  console.log(values)
  if(user){
    return <Navigate to="/"/>
  }
  return(
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
        <div className="md:flex flex-row-reverse border-4 border-white m-2 rounded">
          <img 
            className="md:w-5/12 max-h-64 object-none object-top md:object-cover md:max-h-full w-full md:block" src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733337.jpg?t=st=1721383771~exp=1721387371~hmac=2fabd630fd6747ca44476624115b9e78ed09ed4dede9b90f873968bdd8c13c3e&w=360"/>
          <div className="flex flex-col bg-white items-center justify-center md:w-7/12 py-8 px-4">
            <h1 className="md:text-3xl text-xl mb-4 font-serif">LOG IN</h1>

            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col px-4 py-2 rounded-xl gap-3">
            <label className="sr-only">Email</label>
             <div className="relative">
              <FaCircleUser className="text-gray-500 text-4xl p-2 absolute"/>
             <Input 
               value={values.email}
               error={errors.email}
               onBlur={handleBlur}
               onChange={handleChange}
               touched={touched.email}
               label="Email Address"
               id="email" 
               type="email" 
               name="email" 
               className="border-2 px-2 py-1 border-l-0" 
               placeholder="USERNAME">
             </Input>
             </div>
            <label className="sr-only">Password</label>
             <div className="relative">
               <RiLockPasswordLine className="absolute text-gray-500 text-4xl p-2"/>
                <Input 
                  value={values.password}
                   error={errors.password}
                   onBlur={handleBlur}
                   onChange={handleChange}
                   touched={touched.password}
                  label="Password"
                  id="password"
                  type="password" 
                  name="password" 
                  required
                  className="px-2 py-1 border-2 border-l-0" 
                  placeholder="PASSWORD">
                </Input>
             </div>
              <button type="submit" className="px-4 py-1 text-white rounded bg-blue-600 font-serif">
                LOGIN
              </button>
                <Link className="self-end text-sm text-blue-700 font-serif" to="/forgotPassword">Forgot Password ?</Link>
              <p className="mt-8 font-serif">Don't have an account ? 
                <Link className="text-blue-700 font-serif" to="/signUp">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const easyLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: submit
})(LoginPage)
export default withAlert(withUser(easyLogin));