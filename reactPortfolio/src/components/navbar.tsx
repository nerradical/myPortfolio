import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="text-lg font-bold">
            nerradical&apos;s portfolio 😊
          </a>

          {/* Hamburger (mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Menu (desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Link
            </a>

            {/* Search */}
            <form className="flex">
              <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 rounded-l bg-white text-black"
              />
              <button
                type="submit"
                className="bg-green-500 px-3 py-1 rounded-r hover:bg-green-600"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 bg-gray-800">
          <a href="#" className="block hover:text-gray-300">
            Home
          </a>
          <a href="#" className="block hover:text-gray-300">
            Link
          </a>

          {/* Search */}
          <form className="flex">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 rounded-l bg-white text-black w-full"
            />
            <button
              type="submit"
              className="bg-green-500 px-3 py-1 rounded-r hover:bg-green-600"
            >
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
