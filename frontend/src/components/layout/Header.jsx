import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; // Importing a login icon from react-icons

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/pathfinder.png"
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-lg font-bold">AI Pathfinder</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <Link
            to="/"
            className="hover:text-blue-300 transition duration-300">
            Home
          </Link>
          <Link
            to="/skill-test"
            className="hover:text-blue-300 transition duration-300">
            Skill Test
          </Link>
          <Link
            to="/dashboard"
            className="hover:text-blue-300 transition duration-300">
            Dashboard
          </Link>
          <Link
            to="/learning-path"
            className="hover:text-blue-300 transition duration-300">
            Learning Path
          </Link>

          {/* Login Icon */}
          <Link
            to="/signin"
            className="flex items-center space-x-1 hover:text-blue-300 transition duration-300"
          >
            <FiLogIn className="text-xl" />
            <span>Login</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
