"use client"
import React, { useEffect } from 'react';

const Footer: React.FC = () => {
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const element = document.getElementById('displayYear');
    if (element) {
      element.innerText = year.toString();
    }
  }, []);

  return (
    <section className="container-fluid footer_section bg-gray-100 px-8 py-12">
      <div className="container mx-auto">
        <p className="text-center text-gray-500">
          &copy; <span id="displayYear"></span> All Rights Reserved By{' '}
          <a href="https://html.design/" className="text-blue-500">
            Free Html Templates
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;