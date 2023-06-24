import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function NavigationBar() {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    // Desktop Nav
    <nav className="flex-between mb-3 w-full px-3 pb-3 pt-3  sm:px-7 h-1/4">
      <Link href="/" className="flex-center flex gap-2">
        <p className="logo_text">BrewBox</p>
      </Link>
      {/* Desktop Nav */}
      <div className="hidden sm:flex ">
        <div className="flex gap-3 pr-2 md:gap-5 ">
          <Link href="/">
            <span className="nav_link">HOME</span>
          </Link>
          <Link href="/menu">
            <span className="nav_link">MENU</span>
          </Link>
          <Link href="/contact">
            <span className="nav_link">CONTACT</span>
          </Link>
          <Link href="/about">
            <span className="nav_link">ABOUT</span>
          </Link>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className="relative flex sm:hidden">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {toggleDropdown && (
            <div className="dropdown z-10">
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                <span className="nav_link">HOME</span>
              </Link>
              <Link
                href="/menu"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                <span className="nav_link">MENU</span>
              </Link>
              <Link href="/contact" onClick={() => setToggleDropdown(false)}>
                <span className="nav_link">CONTACT</span>
              </Link>
              <Link href="/about" onClick={() => setToggleDropdown(false)}>
                <span className="nav_link">ABOUT</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
