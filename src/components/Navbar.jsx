'use client'

import Image from "next/image"
import { useState } from "react"
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Navbar () {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex flex-col md:flex-row items-center justify-between gap-1 px-2 py-1 z-10 bg_navbar">
      <Link href={'/'}>
        <span className="flex items-center gap-2 text-white text-sm ">
        <Image src="/tv.png" width={40} height={40} alt="moviebox logo" />
        MovieBox
        </span>
      </Link>
      <SearchBar />
      <div className="hidden md:flex items-center gap-2">
        <a className=" text-white text-xs">Sign in</a>
        <div className="menu-toogle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "line-top spin" : "line-top"}></span>
              <span
                className={navOpen ? "line-bottom spin" : "line-bottom"}
              ></span>
            </div>
          </div>
      </div>
    </nav>
  )
}