import React from "react";

function Header() {
  return (
    <header className=" bg-neutral py-2 text-neutral-content">
      <div className=" align-content  max-w-6xl flex sm:justify-end">
        <div
          className="flex gap-x-2 sm:gap-x-8 items-center"
        >
          <h1>Header</h1>
          <button className="btn btn-xs btn-outline btn-primary">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
