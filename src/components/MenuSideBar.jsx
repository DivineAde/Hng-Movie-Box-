"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { VscBellDot } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import SearchBar from "./SearchBar";

const MenuSideBar = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="flex ">
              <Image src="/tv.png" width={40} height={40} alt="moviebox logo" />
            </span>
          </Link>
        </div>

        <SearchBar />

        <div className="hidden md:flex gap-2 items-center ">
          <VscBellDot className="text-black w-7 h-7 cursor-pointer" />
          <div className="flex items-center">
            <BiUserCircle className="w-7 h-7 text-black" />
            <BsChevronDown className=" text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSideBar;
