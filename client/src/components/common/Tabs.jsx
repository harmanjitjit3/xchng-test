import { Home, Search, ClipboardClock, User } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Tabs = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary text-white flex justify-around items-center py-3 shadow-lg rounded-t-xl md:hidden">
      <Link to="/app/home" className="flex flex-col items-center w-25">
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link to="/app/search" className="flex flex-col items-center w-25">
        <Search size={24} />
        <span className="text-xs mt-1">Search</span>
      </Link>

      <Link to="/app/profile" className="flex flex-col items-center w-25">
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
};
