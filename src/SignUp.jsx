import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { FaCircleUser } from 'react-icons/fa6';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { withUser, withAlert } from './withProvider';
import Input from './Input';

function signUpSubmit(values, bag) {
  axios
    .post('https://myeasykart.codeyogi.io/signup', {
      fullName: values.name,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      bag.props.setAlert({ message: 'Signed Up Successfully', type: 'success' });
    })
    .catch((error) => {
      bag.props.setAlert({ type: 'error', message: 'Invalid Credentials' });
    });
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email address is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export function SignUp({ values, handleChange, handleSubmit, errors, handleBlur, touched }) {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen">
      <div className="md:flex border-2 border-gray-300 rounded-xl shadow-xl bg-white overflow-hidden max-w-3xl w-full">
        {/* Left Image Section */}
        <div className="md:w-5/2 hidden md:block">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733337.jpg?t=st=1721383771~exp=1721387371~hmac=2fabd630fd6747ca44476624115b9e78ed09ed4dede9b90f873968bdd8c13c3e&w=360"
            alt="Sign Up"
          />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col bg-white items-center justify-center md:w-7/12 w-full py-10 px-6">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">Create an Account</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-4">
            {/* Name Input */}
            <div className="relative">
              <FaCircleUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <Input
                onChange={handleChange}
                error={errors.name}
                value={values.name}
                id="name"
                type="text"
                name="name"
                onBlur={handleBlur}
                touched={touched.name}
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <Input
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                id="email"
                type="email"
                name="email"
                onBlur={handleBlur}
                touched={touched.email}
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <Input
                onChange={handleChange}
                value={values.password}
                error={errors.password}
                id="password"
                name="password"
                type="password"
                onBlur={handleBlur}
                touched={touched.password}
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full px-4 py-2 text-white font-medium rounded bg-blue-600 hover:bg-blue-700 transition duration-300">
              Sign Up
            </button>

            {/* Already have an account */}
            <p className="text-gray-600 text-sm mt-3">
              Already have an account?{' '}
              <Link className="text-blue-700 hover:underline" to="/login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const easySignUp = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: signUpSubmit,
})(SignUp);

export default withUser(withAlert(easySignUp));
