import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full bg-black text-white">
      <div className="flex justify-start">
        <a
          className="flex items-center text-2xl font-bold"
          href="/"
        >
          <span>Seotech</span>
        </a>
      </div>
      <div className="flex justify-center items-center w-full max-w-screen-xl mx-auto">
        <ul className="flex justify-between items-center mx-8 flex-grow">
          <li className="hover:bg-custom-yellow">
            <button className="flex bg-red-500 rounded-md p-2 w-full">
              <span>Home</span>
            </button>
          </li>
          <li className="hover:bg-custom-yellow">
            <a className="" href="/about">
              About
            </a>
          </li>
          <li className=' hover:bg-custom-yellow'>
            <a className="" href="/services">
              Services
            </a>
          </li>
          <li className='bg-custom-yellow'>
            <a className="" href="#contactLink">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex items-center">
          <a className="" href="tel:+011234567890">
            <img
              src="/images/call.png"
              alt="Call"
              className="w-6 h-6 mr-4"
            />
            <span>Call : +01 1234567890</span>
          </a>
          <form>
            <input
              type="text"
              className="border border-white rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Search"
            />
            <button
              className="bg-white border border-white rounded-full py-2 px-4 ml-2 font-bold transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="submit"
            >
              {/* Add search icon here */}
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
