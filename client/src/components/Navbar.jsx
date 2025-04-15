import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBell,
  FaBars,
  FaSearch,
  FaTimes,
  FaRegCommentDots,
  FaUserCircle,
} from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left side: Logo + Menu */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={20} />
          </button>
          <Link to="/" className="text-xl font-bold text-[#4F6BED] hidden md:block">
            AULExchange
          </Link>
          <Link to="/" className="text-xl font-bold text-[#4F6BED] md:hidden">
            AE
          </Link>
        </div>

        {/* Middle: Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4">
          <Link to="/categories/textbooks" className="text-sm font-medium">Textbooks</Link>
          <Link to="/categories/furniture" className="text-sm font-medium">Furniture</Link>
          <Link to="/categories/electronics" className="text-sm font-medium">Electronics</Link>
          <Link to="/categories/other" className="text-sm font-medium">Other</Link>
          <Link to="/sell" className="text-sm font-medium">Sell an Item</Link>

          <div className="relative max-w-xs w-full">
            <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
            <input
              type="text"
              className="pl-9 pr-9 py-2 border rounded-md w-full"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute top-2.5 right-2 text-gray-500"
              >
                <FaTimes size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Right: Auth & Icons */}
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <button className="relative text-gray-700">
                <FaBell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-orange-400 rounded-full" />
              </button>
              <Link to="/messages" className="text-gray-700">
                <FaRegCommentDots size={20} />
              </Link>
              <div className="relative group">
                <FaUserCircle size={28} className="text-gray-700 cursor-pointer" />
                <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-10">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">My Listings</Link>
                  <Link to="/messages" className="block px-4 py-2 hover:bg-gray-100">Messages</Link>
                  <Link to="/saved" className="block px-4 py-2 hover:bg-gray-100">Saved Items</Link>
                  <button
                    onClick={toggleLogin}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm px-3 py-1 border rounded-md">
                Log in
              </Link>
              <Link to="/register" className="text-sm px-3 py-1 bg-[#4F6BED] text-white rounded-md">
                Sign up
              </Link>
              {/* <button
                onClick={toggleLogin}
                className="text-sm px-3 py-1 border rounded-md hidden md:inline-block"
              >
                Demo Login
              </button> */}
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className=" text-center flex flex-col px-4 py-4 space-y-2">
            <Link to="/categories/textbooks">Textbooks</Link>
            <Link to="/categories/furniture">Furniture</Link>
            <Link to="/categories/electronics">Electronics</Link>
            <Link to="/categories/other">Other</Link>
            <Link to="/sell">Sell an Item</Link>
            <div className="relative mt-2">
              <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
              <input
                type="text"
                className="pl-9 pr-9 py-2 border rounded-md w-full"
                placeholder="Search for items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute top-2.5 right-2 text-gray-500"
                >
                  <FaTimes size={16} />
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}




