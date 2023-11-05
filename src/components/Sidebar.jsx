import Image from "next/image";
import Link from "next/link";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import { BsCollectionPlay, BsCameraReels, BsFillQuestionCircleFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { TbLogout } from "react-icons/tb";

export default function SideBar() {
  return (
    <aside className="relative lg:fixed top-0 left-0 z-50 flex flex-col gap-6 bg-blue-700 w-full lg:w-[20%] px-5 py-4 h-[30vh] lg:h-screen">
      <Link href={"/"}>
        <div className="flex items-center gap-2 text-white text-lg font-extrabold">
          <Image
            src="/tv.png"
            width={50}
            height={50}
            objectFit="cover"
            className="moviebox logo"
          />
          MovieBox
        </div>
      </Link>

      <div className="flex flex-wrap flex-row lg:flex-col lg:justify-center gap-2 lg:gap-6 pt-4 lg:pt-12">
        <Link href={"/"} className="icon-style flex gap-2 items-center text-gray-200 py-2 px-2 rounded-lg text-sm">
          <BiHomeAlt className="w-7 h-7 cursor-pointer text-white" />
          Home
        </Link>
        <Link href={"/"} className="icon-style flex gap-2 items-center  text-gray-200 py-2 px-2 rounded-lg text-sm bg_sidenav">
          <BsCameraReels className="w-7 h-7 cursor-pointer text-white" />
          Movies
        </Link>
        <Link
          href={"/"}
          className="icon-style flex gap-2 items-center text-gray-200 py-2 px-2 rounded-lg text-sm"
        >
          <BsCollectionPlay className="w-7 h-7 cursor-pointer text-white" />
          Tv Series
        </Link>
        <Link
          href={"/"}
          className="icon-style flex gap-2 items-center  text-gray-200 py-2 px-2 rounded-lg text-sm"
        >
          <SlCalender className=" w-7 h-7 cursor-pointer text-white" />
          Upcoming
        </Link>

        <Link href={"/"} className="icon-style flex gap-2 items-center text-gray-200 py-2 px-2 rounded-lg text-sm">
          <TbLogout className=" w-7 h-7 cursor-pointer text-white" />
          Logout
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 px-2 py-2 flex items-center justify-between w-full">
        <BiUserCircle className="w-7 h-7 text-white" />
        <BsFillQuestionCircleFill className="w-7 h-7" />
      </div>
    </aside>
  );
}
