import React from "react";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between flex-1 ">
        <div>
          <h3>Feisal Keli</h3>
        </div>
        <ul className="flex justify-end gap-4  ">
          <li className="text-center">
            <a href="">Home</a>
          </li>
          <li className="text-center">
            <a href="">About Me</a>
          </li>
          <li className="text-center">
            <a href="">Projects</a>
          </li>
          <li className="text-center">
            <a href="">Experience</a>
          </li>
        </ul>
        {/* Hamburger Menu */}
        <div className="hidden sm:block md:block">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
