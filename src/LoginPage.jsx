import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { FaCircleUser } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import Input from "./Input";
import { withUser, withAlert } from "./withProvider";

function submit(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("user-token", token);
      bag.props.setUser(user);
      bag.props.setAlert({ message: "Login Successful", type: "success" });
    })
    .catch(() => {
      bag.props.setAlert({ type: "error", message: "Invalid Credentials" });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(8, "Must be at least 8 characters").required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export function LoginPage({
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  user,
}) {
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen">
      <div className="flex flex-col md:flex-row-reverse border-2 border-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl bg-white">
        {/* Image Section */}
        <div className="hidden md:block md:w-5/12">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/stylish-woman-with-shopping-bags_23-2148733337.jpg"
            alt="Shopping"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-7/12 px-6 py-10">
          <MdOutlineShoppingCart className="text-4xl text-blue-600 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800 mb-5">Login to Your Account</h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {/* Email Input */}
            <div className="relative w-full">
              <FaCircleUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
              <Input
                value={values.email}
                error={errors.email}
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.email}
                id="email"
                type="email"
                name="email"
                className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Email Address"
              />
            </div>

            {/* Password Input */}
            <div className="relative w-full">
              <RiLockPasswordLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
              <Input
                value={values.password}
                error={errors.password}
                onBlur={handleBlur}
                onChange={handleChange}
                touched={touched.password}
                id="password"
                type="password"
                name="password"
                className="pl-10 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Password"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium py-2 rounded-md w-full"
            >
              Login
            </button>

            {/* Forgot Password & Sign Up */}
            <div className="flex justify-between w-full text-sm text-blue-700">
              <Link to="/forgotPassword" className="hover:underline">
                Forgot Password?
              </Link>
              <span>
                Don't have an account?{" "}
                <Link to="/signUp" className="font-medium hover:underline">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const easyLogin = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: submit,
})(LoginPage);

export default withAlert(withUser(easyLogin));
