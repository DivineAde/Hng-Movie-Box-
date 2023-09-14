import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-7">
      <div className="flex gap-3">
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiFillYoutube />
      </div>
      <ul className="flex flex-col md:flex-row gap-6 md:gap-10 items-center pt-5">
        <li className="font-bold text-sm">Conditions of Use</li>
        <li className=" font-bold text-sm">Privacy & Policy</li>
        <li className="font-bold text-sm">Press Room</li>
      </ul>
      <span className="pt-5 font-medium text-gray-500 text-sm">
        &copy; 2023 MovieBox by Divine Adeyeye
      </span>
    </div>
  );
}
