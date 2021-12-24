import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="m-2 select-none group active:text-red-400 cursor-pointer lg:select-auto transition-transform lg:hover:scale-105">
      <Image
        src={`${BASE_URL}${result.backdrop_path}`}
        layout="responsive"
        width={200}
        height={100}
      />
      <div className="p-2">
        <p className="truncate text-xl pr-2">{result.overview}</p>
        <h2 className="my-2 text-xl font-bold">
          {result.original_name || result.title}
        </h2>
        <p className="flex items-center my-3 lg:opacity-0 group-hover:opacity-100">
          {result.release_date} <ThumbUpIcon className="h-5 ml-2 mr-1" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
