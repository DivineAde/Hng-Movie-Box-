"use client";

import Image from "next/image";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex flex-col md:flex-row items-center justify-between gap-1 px-6 py-2 z-10">
      <Link href={"/"}>
        <span className="flex items-center gap-2 text-white text-sm font-bold">
          <Image src="/tv.png" width={40} height={40} alt="moviebox logo" />
          MovieBox
        </span>
      </Link>
      <SearchBar />
      <div className="hidden md:flex items-center gap-2">
        <BiUserCircle className="w-7 h-7 text-white cursor-pointer" />
        {/*
        <div className="menu-toogle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "line-top spin" : "line-top"}></span>
              <span
                className={navOpen ? "line-bottom spin" : "line-bottom"}
              ></span>
            </div>
          </div>
        */}
      </div>
    </nav>
  );
}
