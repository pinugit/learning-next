import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <Link href="/" className="mr-20 bg-slate-200">
        Next.js
      </Link>
      <Link href="/users"> </Link>
    </div>
  );
};

export default Navbar;
