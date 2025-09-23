import { Home, Search, ClipboardClock, User } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="hidden sm:flex items-center gap-6">
      <Link
        to="/app/home"
        className="flex items-center gap-1 text-white hover:text-gray-200 transition"
      >
        <Home className="w-5 h-5" />
        <span className="text-sm font-medium">Home</span>
      </Link>

      <Link
        to="/app/search"
        className="flex items-center gap-1 text-white hover:text-gray-200 transition"
      >
        <Search className="w-5 h-5" />
        <span className="text-sm font-medium">Search</span>
      </Link>

      <Link
        to="/app/profile"
        className="flex items-center gap-1 text-white hover:text-gray-200 transition"
      >
        <User className="w-5 h-5" />
        <span className="text-sm font-medium">Profile</span>
      </Link>
    </nav>
  );
}

export default NavBar;
