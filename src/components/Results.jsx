import Card from "./Card";

export default function Results({ results }) {
  // Slice the results array to only include the first 10 items
  const limitedResults = results;

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-6 max-w-6xl mx-auto py-4 px-4">
      {limitedResults.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
