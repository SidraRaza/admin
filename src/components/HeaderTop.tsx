'use client';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa6';

const HeaderTop = () => {
  return (
    <div className="border-b border-t border-gray-200 mt-10">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-0 gap-4">
            <div className="header_top__icon_wrapper">
              <FaFacebook className="text-gray-500 transition-colors" />
            </div>
            <div className="header_top__icon_wrapper">
              <FaYoutube className="text-gray-500 transition-colors" />
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin className="text-gray-500 transition-colors" />
            </div>
            <div className="header_top__icon_wrapper">
              <FaGithub className="text-gray-500 transition-colors" />
            </div>
          </div>

          {/* Free Shipping Info */}
          <div className="text-gray-500 text-sm text-center sm:text-left mb-4 sm:mb-0">
            <b>FREE SHIPPING</b> THIS WEEK ON ORDERS OVER $55
          </div>

          {/* Currency, Language, and Categories Select */}
          <div className="flex gap-4">
            {/* Currency Select */}
            <select
              className="text-gray-500 text-sm bg-white border border-gray-300 rounded-md px-2 py-1"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR">INR</option>
            </select>

            {/* Language Select */}
            <select
              className="text-gray-500 text-sm bg-white border border-gray-300 rounded-md px-2 py-1"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>

            {/* Categories Dropdown */}
            <select
              className="text-gray-500 text-sm bg-white border border-gray-300 rounded-md px-2 py-1"
              name="categories"
              id="categories"
            >
              <option value="CATEGORIES">CATEGORIES</option>
              <option value="MEN&apos;S">MEN&apos;S</option>
              <option value="WOMEN&apos;S">WOMEN&apos;S</option>
              <option value="JEWELERY">JEWELERY</option>
              <option value="PERFUME">PERFUME</option>
              <option value="BLOG">BLOG</option>
              <option value="HOT OFFERS">HOT OFFERS</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
