import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex p-3 bg-orange-200">
      <Link href="/" className="mr-20 ">
        Next.js
      </Link>

      <Link href="/users">Users</Link>
    </div>
  );
};

export default Navbar;
