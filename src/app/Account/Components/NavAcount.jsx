"use client"
import Link from "next/link";

export default function NavAcount({ links }) {
  return (
    <>
    {links.map((link, index) => (
        <li
          key={index}
          className="w-[90%] flex border-x-2 group hover:border-black transform duration-300 justify-center"
        >
          <Link
            href={link.href}
            className={` text-center relative tracking-widest group-hover:text-verde transform duration-200 group`}
          >
            {link.label}
            <span className={`animation-underline bg-verde h-[2px] `}></span>
          </Link>
        </li>
      ))}
    </>
  );
}
