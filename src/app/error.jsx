"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className=" bg-white text-black flex flex-col items-center justify-center h-screen">
      <h1 className="text-black">Something went wrong</h1>
      <button
        className=" bg-blue-700 py-1 px-2 text-white rounded-lg font-semibold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
