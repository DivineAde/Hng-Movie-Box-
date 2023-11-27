import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const API_KEY = "a7b45b91a4a49e51474aed718b0bb738";

const MoviesPage = async () => {
  let endpoint = "movie/now_playing";

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-6 max-w-6xl mx-auto py-4 px-4">
      {results.map((series) => (
        <div key={series.id} series={series} data-testid="movie-card" className="pb-6">
          <div className="relative">
            <Image
              data-testid="movie-poster"
              src={`https://image.tmdb.org/t/p/original/${
                series.poster_path || series.backdrop_path
              }`}
              width={700}
              height={1500}
              className="group-hover:opacity-80 transition-opacity duration-200 rounded-lg"
              placeholder="blur"
              blurDataURL="/spinner.svg"
              alt="image is not available"
            />
            <button
              className="absolute top-[5%] left-[80%] bg-transparent p-2 rounded-full"
              
            >
              <AiFillHeart className="w-7 h-7 text-red-600" />
            </button>
            <button
              className="absolute top-[5%] right-[80%] bg-transparent p-2 rounded-full"
             
            >
              <AiFillHeart className="w-7 h-7 text-red-600" />
            </button>
          </div>

          <span
            data-testid="movie-release-date"
            className="text-xs text-gray-500"
          ></span>
          <h3 data-testid="movie-title" className="font-bold mb-6">{series.title || series.name}</h3>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <img
                src="/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
                className=""
                alt="imbd"
              />
              <span>{series.vote_average} / 10.0</span>
            </div>
            <div className="flex items-center gap-1">
              <p>{}%</p>
              <img
                src="/PngItem_1381056 1.png"
                className=""
                alt="rotten tomato score"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Action, Adventure, Thriller
          </p>
        </div>
      ))}
    </div>
  );
};

export default MoviesPage;
