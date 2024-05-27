import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className=" align-content  max-w-6xl flex sm:justify-end">
        <div className="flex gap-x-2 sm:gap-x-8 items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm ">
            Sign in/ Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm ">
            Create Account
          </Link>
          <button className="btn btn-xs btn-outline btn-primary">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
