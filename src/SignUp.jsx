import React from 'react';
import {Link, Navigate} from 'react-router-dom'
import {withFormik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import {withUser, withAlert} from './withProvider';
import Input from "./Input";


function signUpSubmit(values,bag){
   axios.post("https://myeasykart.codeyogi.io/signup",{fullName:values.name, email:values.email, password:values.password}).then((response)=>{
    bag.props.setAlert({message:"Signed Up Successfully", type:"success"})
    }).catch((error)=>{
      bag.props.setAlert({type:"error", message:"Invalid Credentials"});
    })
}
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email address is required'),
  password: Yup.string().min(8).required('Password is required'),
});
const initialValues = {
     name:"",
     email:"",
     password:""
   }


export function SignUp({
  values,
  handleChange,
  handleSubmit,
  errors,
  handleBlur,
  touched,
  user}){
  
  return(
    <>
      <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
        <div className="md:flex border-4 border-white rounded">
          <img className="md:w-5/12 max-h-64 object-none object-top md:object-cover md:max-h-full w-full md:block" src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733337.jpg?t=st=1721383771~exp=1721387371~hmac=2fabd630fd6747ca44476624115b9e78ed09ed4dede9b90f873968bdd8c13c3e&w=360"/>
        <div className="flex flex-col bg-white items-center justify-center md:w-7/12 py-8 px-4">
          <h1 className="text-3xl mb-4 font-serif">Sign Up</h1>
          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col px-4 py-2 rounded-xl gap-2">
            <label className="sr-only">FULL NAME</label>
            <div className="relative">
              <FaCircleUser className="text-gray-500 text-4xl p-2 absolute"/>
           <Input 
             onChange={handleChange} 
             error={errors.name}
             value={values.name} 
             id="name"
             type="text" 
             name="name" 
             onBlur={handleBlur} 
             touched={touched.name}
             className="rounded border-2 px-2 py-1" 
             placeholder="FULL NAME">
           </Input>
            </div>
            <label 
              className="sr-only">
              USERNAME
            </label>
            <div className="relative">
            <MdEmail className="text-gray-500 text-4xl p-2 absolute"/>
           <Input 
             onChange={handleChange} 
             value={values.email} 
             error={errors.email}
             id="email"
             type="email" 
             name="email" 
             onBlur={handleBlur} 
             touched={touched.email}
             className="rounded border-2 px-2 py-1" 
             placeholder="USERNAME">
           </Input>
            </div>
            <label className="sr-only">PASSWORD</label>
            <div className="relative">
               <RiLockPasswordLine className="absolute text-gray-500 text-4xl p-2"/>
              <Input 
                onChange={handleChange} 
                value={values.password} 
                error={errors.password}
                id="password"
                name="password"
                type="password" 
                onBlur={handleBlur} 
                touched={touched.password}
                name="password" 
                className="px-2 py-1 border-2 border-l-0" 
                placeholder="PASSWORD">
              </Input>
            </div>
            <button type="submit" className="px-4 py-1 text-white rounded bg-blue-600 font-serif">SIGN UP</button>
            <p className="font-serif mt-4">Already have an account ? <Link className="text-blue-700 font-serif" to="/login">Log In</Link></p>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}
const easySignUp = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: signUpSubmit
})(SignUp)
export default withUser(withAlert(easySignUp));