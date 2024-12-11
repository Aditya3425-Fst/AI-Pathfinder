import React from 'react';


export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-3 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img
              src="/assets/pathfinder.png"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">AI Pathfinder</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms of Use</a>
            <a href="#" className="hover:text-blue-500">Help Center</a>
            <a href="#" className="hover:text-blue-500">Blog</a>
          </div>
        </div>
        <div className="text-center pt-2 border-t border-gray-800">
          <p>© {new Date().getFullYear()} SkillBridge. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}