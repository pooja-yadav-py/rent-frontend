"use client";
// Importing required modules
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { handleChange, loginUserData } from "../redux/loginSlice";
import axios from "axios";
import { API_BASE_URL } from "../config/constants";

// Login component
export default function Login() {
  const router = useRouter();
  const { email, password, remember, loading, success } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedin = localStorage.getItem("isLoggedIn");
    console.log("isloggedin", isLoggedin);
    if (localStorage.getItem("isLoggedIn")) {
      router.push("/home");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    dispatch(handleChange({ name, value, checked, type }));
  };

  const saveAccessToken = (token) => {
    localStorage.setItem("token", token);
  };

  const saveRefreshToken = (token) => {
    localStorage.setItem("refreshAccessToken", token);
  };

  const refreshAuthToken = async (refreshAccesstoken) => {
    const config = {
      headers: {
        authorization: `Bearer ${refreshAccesstoken}`,
        email: email,
      },
    };
    try {
      console.log("refreshAccessToken========", refreshAccesstoken);
      let response = await axios.post(`${API_BASE_URL}refresh-token`, config);

      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data;
        // Save new tokens
        saveAccessToken(accessToken);
        saveRefreshToken(refreshToken);
        console.log("Tokens refreshed successfully");

        // Call refreshToken recursively with the new refresh token
        setTimeout(() => {
          refreshAuthToken(refreshToken);
        }, 1 * 60 * 1000);
      } else {
        console.error("Error refreshing tokens:", response.data.message);
      }
    } catch (error) {
      console.error(
        "Error refreshing access token:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        loginUserData({ email, password, remember })
      );
      const { error, payload } = resultAction;
      console.log(error, payload);

      if (error) {
        toast.error(payload);
        console.error("Login failed:", error);
      } else {
        console.log("Login successful", payload);
        saveAccessToken(payload.data.accessToken);
        saveRefreshToken(payload.data.refreshToken);
        localStorage.setItem("isLoggedIn", true);
        router.push("/home");
        setTimeout(() => {
          refreshAuthToken(payload.data.refreshToken);
        }, 1 * 60 * 1000);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
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
      <Toaster position="top-center" reverseOrder={false} />

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
              disabled={loading}
              onClick={handleSignIn}
            >
              {loading ? "Signing In.." : "Sign In"}
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
