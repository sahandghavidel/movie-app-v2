import { useRouter } from "next/router";
import requests from "../utils/requests";
export default function Nav() {
  const router = useRouter();
  return (
    <nav className="flex justify-center text-xl sm:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          className="mx-4 select-none cursor-pointer transition duration-100 hover:scale-105 hover:text-white
          active:text-red-400"
          key={key}
          onClick={() => router.push(`/?ganre=${key}`)}
        >
          {title}
        </h2>
      ))}
    </nav>
  );
}
