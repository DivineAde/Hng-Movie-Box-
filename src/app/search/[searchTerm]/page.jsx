import React from "react";
import Results from "@/components/Results";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const API_KEY = "a7b45b91a4a49e51474aed718b0bb738";

export default async function SearchItem({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <div className=" flex flex-col items-center justify-center h-screen">
          <h1>No results found</h1>
          <Link href={"/"} className="px-2 py-2 bg-blue-700 text-white rounded-md font-semibold">Go back Home</Link>
        </div>
      )}

      {results && (
        <div className="pt-[5%]">
          <Navbar />
          <Results results={results} />
        </div>
      )}
    </div>
  );
}
