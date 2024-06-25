import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://t3.ftcdn.net/jpg/02/25/10/36/360_F_225103684_9opc6FzD29B5K2YMXlOTR1yuSQQemA4m.jpg"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-4 py-2 lg:px-5 lg:py-2.5 mr-2 text-sm focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-4 py-2 lg:px-5 lg:py-2.5 mr-2 text-sm focus:outline-none"
            >
              Get in
            </Link>
          </div>
          <div className=" justify-between items-center w-full lg:w-auto lg:order-1"
          id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0 lg:space-x-3 gap-2">
                <li> 
                    <NavLink
                    to="/" 
                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-700 lg:p-0`}
                    >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/about" 
                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-700 lg:p-0`}
                    >
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="/contact" 
                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-700 lg:p-0`}
                    >
                    Contact US 
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to="github" 
                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200 ${isActive ?"text-orange-700" :"text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-700 lg:p-0`}
                    >
                    Github
                    </NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
