import React from 'react'
import Link from 'next/link'
import { IoHomeSharp } from 'react-icons/io5'
import { FcAbout } from 'react-icons/fc'
import { GrServices } from 'react-icons/gr'
import { MdContacts } from 'react-icons/md'
import { GiTargetPrize } from 'react-icons/gi'
import { IoLogInSharp } from 'react-icons/io5'
import { SiGnuprivacyguard } from 'react-icons/si'

const Menu = (props) => {
  const handleMenu = () => {
    props.setIsDropdownOpen(false)
  }

  return (
    <div>
      <ul className="font-medium flex flex-col p-3 md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="#"
            className="nav-link block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page"
            onClick={handleMenu}
          >
            {props.icon && (
              <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                <IoHomeSharp className="inline-block text-xl" />
              </span>
            )}
            <span className="inline-block">{props.icon ? 'Home' : 'Home'}</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleMenu}
          >
            {props.icon && (
              <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                <FcAbout className="inline-block text-xl" />
              </span>
            )}
            <span className="inline-block">
              {props.icon ? 'About' : 'About'}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleMenu}
          >
            {props.icon && (
              <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                <GrServices className="inline-block text-xl" />
              </span>
            )}{' '}
            <span className="inline-block">
              {props.icon ? 'Services' : 'Services'}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleMenu}
          >
            {props.icon && (
              <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                <GiTargetPrize className="inline-block text-xl" />
              </span>
            )}
            <span className="inline-block">
              {props.icon ? 'Pricing' : 'Pricing'}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleMenu}
          >
            {props.icon && (
              <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                <MdContacts className="inline-block text-xl" />
              </span>
            )}
            <span className="inline-block">
              {props.icon ? 'Contact' : 'Contact'}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="nav-link block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleMenu}
          >
            {props.icon && (
              <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                <IoLogInSharp className="inline-block text-xl" />
              </span>
            )}
            <span className="inline-block">
              {props.icon ? 'Login' : 'Login'}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/signup"
            className="nav-link focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            onClick={handleMenu}
          >
            {props.icon && (
              <span className="inline-block mr-2 border border-gray-400 rounded-md p-1">
                <SiGnuprivacyguard className="inline-block text-xl" />
              </span>
            )}
            <span className="inline-block">
              {props.icon ? 'Signup' : 'Signup'}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
