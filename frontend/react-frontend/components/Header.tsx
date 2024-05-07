import React from 'react';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="  bg-red-500 ">
      <div className="flex justify-center items-center  ">
        <nav className="container mx-auto px-4 py-2.5 w-full h-auto flex flex-row">
          <a
            className=" flex items-center text-2xl font-bold   lg:w-auto mr-4 md:w-1/5 w-1/12"
            href="/"
          >
            <span>Seotech</span>
          </a>
          <button
            className="  lg:hidden cursor-pointer flex items-center px-4 py-2 border border-transparent  rounded-md leading-5 font-medium focus:outline-none transition"
          >
          </button>
          <div
            className="collapse  navbar-collapse px-0 pt-4 pb-4 lg:p-0  lg:w-4/5 flex-grow lg:flex-grow-0 lg:flex lg:items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav lg:flex-grow flex-col lg:flex-row lg:ml-auto">
              <li className="nav-item lg:w-1/5 w-1/3">
                <a
                  className="nav-link block lg:inline-block lg:mt-0 mt-4 lg:mr-5 lg:mb-0 mr-0 mb-4  font-bold lg:hover:text-gray-300 text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:shadow-outline-gray transition"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item lg:w-1/5 w-1/3">
                <a
                  className="nav-link block lg:inline-block lg:mt-0 mt-4 lg:mr-5 lg:mb-0 mr-0 mb-4  font-bold lg:hover:text-gray-300 text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:shadow-outline-gray transition"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="nav-item lg:w-1/5 w-1/3">
                <a
                  className="nav-link block lg:inline-block lg:mt-0 mt-4 lg:mr-5 lg:mb-0 mr-0 mb-4  font-bold lg:hover:text-gray-300  hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:shadow-outline-gray transition"
                  href="/services"
                >
                  Services
                </a>
              </li>
              <li className="nav-item lg:w-1/5 w-1/3">
                <a
                  className="nav-link block lg:inline-block lg:mt-0 mt-4 lg:mr-5 lg:mb-0mr-0 mb-4  font-bold lg:hover:text-gray-300  hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:shadow-outline-gray transition"
                  href="#contactLink"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="quote_btn-container flex items-center">
              <a
                className="flex items-center  font-bold text-base leading-relaxed"
                href="tel:+011234567890"
              >
                <img
                  src="/images/call.png"
                  alt="Call"
                  className="w-6 h-6 mr-4"
                />
                <span>Call : + 01 1234567890</span>
              </a>
              <form
                className="flex-grow lg:flex-grow-0 ml-0 lg:ml-auto mt-4 lg:mt-0"
              >
                <input
                  type="text"
                  className=" border border-white rounded-full w-64 py-2 pl-12 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Search"
                />
                <button
                  className="btn nav_search-btn block lg:inline-block lg:mt-0 mt-4 lg:mr-5 lg:mb-0 mr-0 mb-4 border border-white  font-bold py-2 px-4 rounded-full transition hover:bg-white hover:text-gray-800 focus:outline-none focus:bg-white focus:text-gray-800 focus:shadow-outline-white"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-search h-5 w-5"
                  >
                    <defs></defs>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;