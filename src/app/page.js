import Image from "next/image";
import HomePage from "@/components/HomePage";
import Results from "@/components/Results";
import Footer from "@/components/Footer";
import Link from "next/link";

const API_KEY = "a7b45b91a4a49e51474aed718b0bb738";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  let endpoint = "";
  if (genre === "fetchTopRated") {
    endpoint = "movie/top_rated";
  } else {
    endpoint = "movie/popular";
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  // Get a random movie from the results
  const randomMovie = results[Math.floor(Math.random() * results.length)];

  // Construct the URL for the movie poster
  const posterPath = randomMovie.backdrop_path;
  const posterUrl = `https://image.tmdb.org/t/p/original${posterPath}`;

  return (
    <main className="w-full">
      <HomePage
        backgroundImage={posterUrl}
        title={randomMovie.original_title}
        name={randomMovie.name}
        overview={randomMovie.overview}
        rating={randomMovie.vote_average}
      />

      <div>
        <div className="flex justify-between items-center max-w-6xl mx-4 md:mx-auto py-4 text-lg">
          <h1 className=" md:text-3xl font-semibold capitalize">
            Feature Movies
          </h1>
          <Link href="/more" className="underline text-red-400">
            See more
          </Link>
        </div>
        <Results results={results} />
      </div>

      <Footer />
    </main>
  );
}
