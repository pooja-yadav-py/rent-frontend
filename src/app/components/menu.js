import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LISTITEMS } from "../config/constants";
import { SiGnuprivacyguard } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";

import { useSelector } from "react-redux";

const Menu = ({ setIsDropdownOpen, icon }) => {
  const router = useRouter();
  const isloggedin = localStorage.getItem("isLoggedIn");

  const handleMenu = (item) => {
    setIsDropdownOpen(false);
    console.log(item);
  };

  let MENUITEMS;
  if (isloggedin) {
    MENUITEMS = LISTITEMS.filter((item) => {
      return item.text !== "Login" && item.text !== "Signup";
    });
  } else {
    MENUITEMS = LISTITEMS;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshAccessToken");
    router.push("/login");

    console.log("logout");
  };
  console.log("icon", icon);
  return (
    <div>
      <ul className="font-medium flex flex-col p-3 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {MENUITEMS.map((item) => (
          <li key={item.text}>
            <Link
              href={item.link}
              className="nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={() => handleMenu(item.text)}
            >
              {icon && (
                <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                  <item.icon className="inline-block text-xl" />
                </span>
              )}
              <span className="inline-block">{item.text}</span>
            </Link>
          </li>
        ))}
        {isloggedin && (
          <li key="logout">
            <button onClick={handleLogout}>
              {icon && (
                <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                  <IoHomeSharp className="inline-block text-xl" />
                </span>
              )}
              LogOut
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
