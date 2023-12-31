"use client";

import { BsDot, BsFillPeopleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { AiTwotoneStar } from "react-icons/ai";
import Footer from "@/components/Footer";
import { IoTicketOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";

const API_KEY = "a7b45b91a4a49e51474aed718b0bb738";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return await res.json();
}

async function getTrailer(movieId) {
  const trial = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );
  return await trial.json();
}

export default async function MoviePage({ params }) {
  const router = useRouter();
  console.log(router);

  const movieId = params.id;
  const movie = await getMovie(movieId);
  console.log(movie);
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
          {/*<Image
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
          />*/}
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
              className="font-semibold mr-2 flex items-center text-lg italic"
            >
              {movie.title} <BsDot className="hidden lg:block" />
            </p>
            <p
              data-testid="movie-release-date"
              className="font-semibold mr-2 flex items-center text-lg italic"
            >
              {releaseDateUTC} <BsDot className="hidden lg:block" />
            </p>
            <span
              data-testid="movie-runtime"
              className="font-semibold mr-2 text-lg italic flex items-center "
            >
              {movie.runtime} Minutes <BsDot className="hidden lg:block" />
            </span>
            <div className="flex gap-4">
              <ul className="flex items-center">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li
                      key={genre.id}
                      className="px-2 py-1 text-rose-600 bg-white border rounded-full text-xs md:text-lg"
                    >
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex items-center float-right">
              <AiTwotoneStar color="#f8ea1f" />
              <label className="flex items-center">
                {voteAverage} |{" "}
                <span>
                  <BsFillPeopleFill className="mr-1" />
                </span>{" "}
                <span>{movie.vote_count}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full md:w-3/4">
            <p data-testid="movie-overview">{movie.overview}</p>
            <div className="mt-4">
              <ul className="flex flex-col gap-4">
                <li className="">
                  Producers:
                  <span className="">
                    {movie.production_companies &&
                      movie.production_companies.map((created) => (
                        <span key={created.id} className="ml-3 text-rose-600">
                          {created.name}
                        </span>
                      ))}
                  </span>
                </li>
                <li className="">
                  Tagline:{" "}
                  <span className="ml-3 text-rose-600 capitalize">
                    {movie.tagline}
                  </span>
                </li>

                <li className="">
                  Budget:
                  <span className="ml-3 bg-rose-600 py-2 px-4 text-white rounded-md w-fit">
                    ${movie.revenue}
                  </span>
                </li>
              </ul>

              <div className="w-full mt-4 flex flex-col items-start md:items-center md:flex-row gap-4 ">
                <span className=" bg-rose-600 py-2 px-4 text-white rounded-md w-fit items-center">
                  Top Series No#
                </span>
                <span>Awards and Nominations</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/4 flex flex-col gap-1">
            <span className=" bg-rose-600 py-2 px-4 rounded-md w-fit flex items-center gap-2 text-white">
              <IoTicketOutline className="w-5 h-5 " /> See more showtime
            </span>
            <span className=" bg-rose-200 py-2 px-4 rounded-md w-fit flex items-center gap-2 text-black border-rose-700 border">
              <FaListUl className="w-5 h-5" />
              More watch options
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
