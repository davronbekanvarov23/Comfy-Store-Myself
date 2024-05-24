import React from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "About", path: "/about" },
  { id: 3, text: "Products", path: "/products" },
  { id: 4, text: "Cart", path: "/cart" },
  { id: 5, text: "Checkout", path: "/checkout" },
  { id: 6, text: "Orders", path: "/orders" },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            to={link.path}
            key={link.id}
            className=" btn active:bg-black active:text-cyan-50 "
          >
            {" "}
            {link.text}{" "}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
