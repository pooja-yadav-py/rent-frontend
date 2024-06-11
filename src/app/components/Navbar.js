"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white border-gray-200 dark:bg-gray-900 z-50">
        <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
          <div className="flex mx-2">
            <img src="/images/logo.webp" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <span className="text-green-500">Rent</span>Items
            </span>
          </div>

          {/* Hamburger menu button for small screens */}
          <div className="Hamburger_menu md:hidden relative">
            <button
              className="mobile-menu-button focus:outline-none"
              onClick={toggleDropdown}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className="nav-links hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <Menu />
          </div>
        </div>
      </nav>

      {/* Dropdown menu */}
      <div
        className={`nav-links md:hidden w-25 absolute top-9 right-1 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-dark ${
          isDropdownOpen ? "block" : "hidden"
        } `}
        id="dropdown-menu"
        style={{ zIndex: 50 }}
      >
        <Menu />
      </div>
    </>
  );
};
