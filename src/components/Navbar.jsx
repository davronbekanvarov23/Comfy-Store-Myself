import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Mode from "./Mode";
import { SlBasket } from "react-icons/sl";
import { FaBarsStaggered } from "react-icons/fa6";
function Navbar() {
  return (
    <div className="bg-base-200">
      {" "}
      <div className=" navbar align-content ">
        <div className=" navbar-start">
          <NavLink className="btn btn-primary hidden lg:flex text-3xl items-center active">
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
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
          <NavLink
            to="/cart"
            className="indicator btn btn-ghost btn-circle btn-md ml-4"
          >
            <div className=" indicator">
              <span className="indicator-item badge badge-primary badge-sm">
                9
              </span>
              <SlBasket className="w-7 h-7" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
