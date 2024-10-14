
import Link from "next/link";
import React from "react";

export default function Navbar_Item({ title,param, searchParams}) {

  return (
    <div>
      <Link
        className={`hover:text-amber-500 ${
          searchParams === param
            ? " underline underline-offset-8 decoration-4 decoration-orange-400 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
