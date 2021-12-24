import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {results.map((result) => (
        <Thumbnail key={result.key} result={result} />
      ))}
    </div>
  );
}
