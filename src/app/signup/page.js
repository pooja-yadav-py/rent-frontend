"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
  FaUserCircle,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import bgImage from "../../../public/images/back.jpg";
import { useState } from "react";
// import { useRouter } from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import { updateField, signupUser } from "../redux/signupSlice";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { fullName, email, password, loading, error, success } = useSelector(
    (state) => state.signup
  );
  console.log(email);
  console.log(success);
  const handleSignUpChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    dispatch(updateField({ field: name, value }));
  };

  const handleSignUpForm = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        signupUser({ fullName, email, password })
      );
      console.log(resultAction);
      const { error, payload } = resultAction;
      if (error) {
        toast.error(payload ? payload : "Signup failed");
        console.error("Signup failed:", error);
      } else {
        toast.success(payload.message);
        console.log("Signup successful", payload);
        router.push("/login");
      }
    } catch (error) {
      toast.error("Signup failed");
      console.error("Signup failed::", error.message);
    }
  };
  return (
    <main className="relative flex flex-col items-center justify-center w-full p-24 text-center bg-center bg-no-repeat">
      <Toaster position="top-center" reverseOrder={false} />
      <Image
        src="/images/back3.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl relative z-10">
        {/* signin section */}
        <div className=" relative w-3/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12 ">
          <div className="text-left font-bold absolute top-5 left-5">
            <span className="text-black ">Rent</span>Items
          </div>
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <div className="border-2 w-10 border-white mx-auto mb-2"></div>
          <p className="mb-10">
            To keep connected with us please login with your personal info
          </p>
          <Link
            href="/login"
            className="border-2 border-white rounded-full mx-auto px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500 hover:cursor-pointer"
          >
            Sign In
          </Link>
        </div>

        {/* signup section */}
        <div className="w-4/5 p-5">
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 text-center mb-2">
              Create Account
            </h2>
            <div className="border-2 w-10 border-green-500 mx-auto mb-2"></div>

            {/* Social login function  start*/}
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            {/* Social login function  end*/}

            <p className="text-gray-400 my-3 ">or use your email Account</p>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaUserCircle className="text-gray-400 m-2" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="FullName"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={fullName}
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className="text-gray-400 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={email}
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className="text-gray-400 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={password}
                  onChange={handleSignUpChange}
                />
              </div>
            </div>
            <button
              className="border-2 border-green-500  text-green-500 rounded-full mx-auto px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white hover:cursor-pointer"
              disabled={loading}
              onClick={handleSignUpForm}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
