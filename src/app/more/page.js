import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const API_KEY = "a7b45b91a4a49e51474aed718b0bb738";

export default async function More({ searchParams }) {
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
  console.log(results);
  return (
    <>
      <Navbar />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto mt-[15%] md:mt-[10%] gap-4 px-4">
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>

      <Footer />
    </>
  );
}
