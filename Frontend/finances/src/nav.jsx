import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-grey shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <div className="text-xl font-bold text-indigo-600">
            My Finance 
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              About
            </a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
