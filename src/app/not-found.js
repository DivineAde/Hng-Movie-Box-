import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className=" bg-white text-black flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl">Oooops, Page not found </h1>
      <Link href='/'>
        <button className=" bg-blue-700 py-1 px-2 text-white rounded-lg font-semibold">
          Go back home
        </button>
      </Link>
    </div>
  );
}
