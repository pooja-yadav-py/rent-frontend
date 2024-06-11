"use client";
// Importing required modules
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleChange } from "../redux/slice";

// Home component
export default function Login() {
  const router = useRouter();

  const dispatch = useDispatch();

  const { email, password, remember } = useSelector((state) => state.login);

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    dispatch(handleChange({ name, value, checked, type }));
  };

  const handleSignIn = async () => {
    console.log("==========", email, password, remember);

    try {
      let formData = {
        email,
        password,
        // remember
      };
      console.log(formData);
      let response = await axios.post(
        "http://localhost:8080/api/v1/login",
        formData
      );
      console.log(response.data.message);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // Main section
    <main className="relative flex flex-col items-center justify-center w-full p-24 text-center bg-center bg-no-repeat">
      <Image
        src="/images/back3.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl relative z-10">
        {/* Signin section */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            {/* Logo */}
            <span className="text-green-500">Rent</span>Items
          </div>
          <div className="py-10">
            {/* Signin title */}
            <h2 className="text-3xl font-bold text-green-500 text-center mb-2">
              Sign in to RentItems
            </h2>
            <div className="border-2 w-10 border-green-500 mx-auto mb-2"></div>

            {/* Social login function */}
            <div className="flex justify-center my-2">
              {/* Facebook login */}
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              {/* LinkedIn login */}
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              {/* Google login */}
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>

            {/* Email login */}
            <p className="text-gray-400 my-3 ">or use your email Account</p>
            <div className="flex flex-col justify-center items-center">
              {/* Email input */}
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              {/* Password input */}
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
              {/* Remember me and forgot password */}
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1"
                    checked={remember}
                    onChange={handleInputChange}
                  />
                  Remember Me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password
                </a>
              </div>
            </div>
            {/* Signin button */}
            <button
              className="border-2 border-green-500  text-green-500 rounded-full mx-auto px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white hover:cursor-pointer"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Signup section */}
        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
          <div className="border-2 w-10 border-white mx-auto mb-2"></div>
          <p className="mb-10">
            Fill up personal information and start journey with us.
          </p>
          {/* Signup link */}
          <Link
            href="/signup"
            className="border-2 border-white rounded-full mx-auto px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}
