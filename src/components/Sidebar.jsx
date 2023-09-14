import Image from "next/image";
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { BsCollectionPlay, BsCameraReels } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { TbLogout } from "react-icons/tb";

export default function SideBar() {
  return (
    <aside className="relative lg:fixed top-0 left-0 z-50 flex flex-col items-center gap-6 bg-slate-50 w-full lg:w-[20%] px-8 rounded-b-xl lg:rounded-r-xl py-4 h-[30vh] lg:h-screen border-2 border-white shadow">
      <Link href={"/"}>
        <span className="flex items-center gap-2 text-black text-sm">
          <Image
            src="/tv.png"
            width={40}
            height={40}
            className="moviebox logo"
          />
          MovieBox
        </span>
      </Link>

      <div className="flex flex-wrap flex-row lg:flex-col lg:justify-center gap-2 lg:gap-6 pt-4 lg:pt-12">
        <Link href={"/"} className="icon-style flex gap-2 items-center">
          <BiHomeAlt className="w-5 h-5 cursor-pointer" />
          Home
        </Link>
        <Link href={"/"} className="icon-style flex gap-2  items-center">
          <BsCameraReels className="w-5 h-5 cursor-pointer" />
          Movies
        </Link>
        <Link
          href={"/"}
          className="icon-style flex gap-2  items-center col-span-1"
        >
          <BsCollectionPlay className=" w-5 h-5 cursor-pointer" />
          Tv Series
        </Link>
        <Link
          href={"/"}
          className="icon-style flex gap-2  items-center col-span-1"
        >
          <SlCalender className=" w-5 h-5 cursor-pointer" />
          Upcoming
        </Link>

        <Link href={"/"} className="icon-style flex gap-2  items-center">
          <TbLogout className=" w-5 h-5 cursor-pointer" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
