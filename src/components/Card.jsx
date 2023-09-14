"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Card({ result }) {
  const [isLiked, setIsLiked] = useState(false);
  const localStorageKey = `isLiked_${result.id}`;

  const ratingPercentage = Math.round((result.vote_average / 10) * 100);

  useEffect(() => {
    const savedLikedState = localStorage.getItem(localStorageKey);
    if (savedLikedState) {
      setIsLiked(JSON.parse(savedLikedState));
    }
  }, []);

  const toggleLike = (e) => {
    e.preventDefault();
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    localStorage.setItem(localStorageKey, JSON.stringify(newLikedState));
  };

  const voteAverage = result.vote_average.toFixed(1);

  // Convert release date to UTC format
  const releaseDate = new Date(result.release_date).toUTCString();

  return (
    <Link href={`/movies/${result.id}`} className="">
      <div data-testid="movie-card" className="pb-6">
        <div className="relative">
          <Image
            data-testid="movie-poster"
            src={`https://image.tmdb.org/t/p/original/${
              result.poster_path || result.backdrop_path
            }`}
            width={700}
            height={1500}
            className="group-hover:opacity-80 transition-opacity duration-200"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          />
          <button
            className="absolute top-[5%] left-[80%] bg-slate-400 p-2 rounded-full"
            onClick={(e) => toggleLike(e)}
          >
            {isLiked ? (
              <AiFillHeart className="w-7 h-7 text-red-600" />
            ) : (
              <AiOutlineHeart className="w-7 h-7" />
            )}
          </button>
        </div>

        <span
          data-testid="movie-release-date"
          className="text-xs text-gray-500"
        >
          {releaseDate}
        </span>
        <h3 data-testid="movie-title" className="font-bold mb-6">
          {result.title || result.name}
        </h3>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <img
              src="/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
              className=""
              alt="imbd"
            />
            <span>{voteAverage} / 10.0</span>
          </div>
          <div className="flex items-center gap-1">
            <p>{ratingPercentage}%</p>
            <img src="/PngItem_1381056 1.png" className="" alt="rotten tomato score" />
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Action, Adventure, Thriller
        </p>
      </div>
    </Link>
  );
}
