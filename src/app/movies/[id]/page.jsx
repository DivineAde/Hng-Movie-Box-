"use client";

import SideBar from "@/components/Sidebar";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { AiTwotoneStar } from "react-icons/ai";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuSideBar from "@/components/MenuSideBar";
import HeaderMobile from "@/components/MenuBarMobile";

const API_KEY = "a7b45b91a4a49e51474aed718b0bb738";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return await res.json();
}

async function getTrailer(movieId) {
  const trial = await fetch(
    `http://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  return await trial.json();
}

export default async function MoviePage({ params }) {
  const router = useRouter();
  console.log(router);

  const movieId = params.id;
  const movie = await getMovie(movieId);
  const trailer = await getTrailer(movieId);

  const watch = trailer.results[0].key;

  // Convert the movie's release date to UTC date object
  const releaseDateUTC = new Date(movie.release_date).toUTCString();

  const voteAverage = movie.vote_average.toFixed(1);

  return (
    <div className="">
      <div className="flex flex-col px-2 w-full mt-2 ml-0">
        <iframe
          className="w-full"
          width="1000"
          height="480"
          src={`https://www.youtube.com/embed/${watch}`}
          title="Official Clip &#39; – Tobin Bell, Shawnee Smith"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="relative w-full py-2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            width={1500}
            height={100}
            className="rounded-lg mx-auto"
            style={{
              maxWidth: "100%",
              height: "400px",
              objectFit: "cover",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="Movie poster"
          />
          {/*<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <button className="rounded-full p-4 border-2 bg_navbar">
              <img src="/Play.png" alt="Play" />
            </button>
            <p className="text-white font-semibold">Watch trailer</p>
          </div>*/}
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex flex-col lg:flex-row lg:items-center pt-2">
            <p
              data-testid="movie-title"
              className="font-semibold mr-2 flex items-center text-lg"
            >
              {movie.title} <BsDot className="hidden lg:block" />
            </p>
            <p
              data-testid="movie-release-date"
              className="font-semibold mr-2 flex items-center text-sm lg:text-lg"
            >
              {releaseDateUTC} <BsDot className="hidden lg:block" />
            </p>
            <span
              data-testid="movie-runtime"
              className="font-semibold mr-2 text-base lg:text-lg"
            >
              {movie.runtime}
            </span>
            <div className="flex gap-4">
              <label className="px-2 py-1 text-rose-600 bg-white border rounded-full">
                Action
              </label>
              <label className="px-2 py-1 text-rose-600 bg-white border rounded-full">
                Thriller
              </label>
            </div>
            <div className="flex items-center float-right">
              <AiTwotoneStar color="#f8ea1f" />
              <label>
                {voteAverage} | <span>{movie.vote_count}</span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <p data-testid="movie-overview">{movie.overview}</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
