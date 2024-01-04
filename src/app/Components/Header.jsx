import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        <Link href="/">Tech-Mentors</Link>
        <form className="hidden md:w-1/2 lg:w-1/3 border rounded-lg border-purple-700 md:flex flex-row items-center justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-tl-lg rounded-bl-lg focus:outline-purple-700"
          />
          <button className="px-4 py-2 rounded-tr-lg rounded-br-lg bg-purple-700 text-white">
            Search
          </button>
        </form>
        <nav>
          {/* <button href="/Login">Login</button> */}
          <Link href={"/Login"}>Login</Link>
          {/* <button>Register</button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
