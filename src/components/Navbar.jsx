import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Mode from "./Mode";
import { SlBasket } from "react-icons/sl";
function Navbar() {
  return (
    <div className="bg-base-200">
      {" "}
      <div className=" navbar align-content ">
        <div className=" navbar-start">
          <Link className="btn btn-primary hidden lg:flex text-3xl items-center active">
            C
          </Link>
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-32 "
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks />
          </ul>
        </div>

        <div className=" navbar-end ">
          <Mode />
          <Link
            to="/cart"
            className="indicator btn btn-ghost btn-circle btn-md ml-4"
          >
            <div className=" indicator">
              <span className="indicator-item badge badge-primary badge-sm">
                9
              </span>
              <SlBasket className="w-7 h-7" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
