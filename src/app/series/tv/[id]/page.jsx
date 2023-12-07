"use client";

import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";
import { BsDot, BsFillPeopleFill } from "react-icons/bs";
import { IoTicketOutline } from "react-icons/io5";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";

const API_KEY = "a7b45b91a4a49e51474aed718b0bb738";
async function getSeries(seriesId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${seriesId}?api_key=${API_KEY}`
  );
  return await res.json();
}

const UniqueSeries = async ({ params }) => {
  const [items, setItems] = useState();

  const seriesId = params.id;
  const series = await getSeries(seriesId);

  return (
    <div className="">
      <div className="flex flex-col px-2 w-full mt-2 ml-0">
        <div className="relative w-full py-2">
          <Image
            src={`https://image.tmdb.org/t/p/original/${series.backdrop_path}`}
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
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex flex-col lg:flex-row lg:items-center pt-2">
            <p
              data-testid="movie-title"
              className="font-semibold mr-2 flex items-center text-lg italic"
            >
              {series.name} <BsDot className="hidden lg:block" />
            </p>
            <p
              data-testid="movie-release-date"
              className="font-semibold mr-2 flex items-center text-lg italic lg:text-lg"
            >
              {series.first_air_date} <BsDot className="hidden lg:block" />
            </p>
            <span
              data-testid="movie-runtime"
              className="font-semibold mr-2 text-lg italic"
            >
              {series.episode_run_time} Minutes
            </span>
            <div className="flex gap-4">
              <ul>
                {series.genres &&
                  series.genres.map((genre) => (
                    <li
                      key={genre.id}
                      className="px-2 py-1 text-rose-600 bg-white border rounded-full text-xs"
                    >
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex items-center float-right">
              <AiTwotoneStar color="#f8ea1f" />
              <label className="flex items-center">
                {series.vote_average} |{" "}
                <span>
                  <BsFillPeopleFill className="mr-1" />
                </span>{" "}
                <span>{series.vote_count}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
          <div className="w-full md:w-3/4">
            <p data-testid="movie-overview">{series.overview}</p>
            <div className="mt-4">
              <ul className="flex flex-col gap-4">
                <li className="">
                  Writers:
                  <span className="">
                    {series.created_by &&
                      series.created_by.map((created) => (
                        <span key={created.id} className="ml-3 text-rose-600">
                          {created.name}
                        </span>
                      ))}
                  </span>
                </li>
                <li className="">
                  Tagline:{" "}
                  <span className="ml-3 text-rose-600 capitalize">
                    {series.tagline}
                  </span>
                </li>

                <li className="">
                  Seasons:{" "}
                  <span className="ml-3 bg-rose-600 py-2 px-4 text-white rounded-md w-fit">
                    {series.number_of_seasons} Seasons{" "}
                    {series.number_of_episodes} Episodes
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
};

export default UniqueSeries;
