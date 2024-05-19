"use client";
import React, { useState } from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const AdminNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-blue">
      <div className="font-bold text-white flex px-4 py-3 items-center justify-center  text-2xl">
        <h1>Seotech</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-3 items-center justify-center flex text-white ">
        <div className="flex justify-between items-center">
          <div className="hidden md:block">
            <ul className="flex space-x-4 m-2">
              <NavItem href="/admin/UpdateContent">Update Content</NavItem>
              <NavItem href="/admin/users">Users</NavItem>
              <NavItem href="/admin/newletter">Newsletter</NavItem>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-gray-800">
            <NavItemMobile href="/admin/dashboard">Dashboard</NavItemMobile>
            <NavItemMobile href="/admin/users">Users</NavItemMobile>
            <NavItemMobile href="/admin/products">Products</NavItemMobile>
            <NavItemMobile href="/admin/orders">Orders</NavItemMobile>
          </ul>
        </div>
      )}
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};

const NavItemMobile: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}></Link>
    </li>
  );
};

export default AdminNavbar;
