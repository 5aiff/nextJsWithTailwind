import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-4 py-2 text-white bg-purple-700">
      <div className="text-center max-w-7xl mx-auto md:flex md:flex-row items-center justify-between">
        <Link href="/">&copy; 2024 Tech-Mentors</Link>
        <div className=" flex flex-row items-center md:gap-4">
          <p>Refund Policy</p>
          <p>Term Of Use</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
