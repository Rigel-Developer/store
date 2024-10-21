import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className="bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <ul className="flex">
        <Link href={"/"}>Home</Link>

        <div className="flex flex-1"></div>
        {navItems.map((item) => (
          <ActiveLink key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
};
