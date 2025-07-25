import React from "react";
import { Link } from "react-router-dom";
import {assets} from "../../assets/assets";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const sidebarLinks = [];
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md border-b border-gray-200 transition-all duration-300">
      <Link to='/' className="flex items-center gap-2">
        <img src={assets.logo} alt="" className="h-9 invert opacity-80 "/>
      </Link>
      <UserButton />
    </div>
  );
};

export default Navbar;
