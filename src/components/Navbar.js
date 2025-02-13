import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Projects</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;

