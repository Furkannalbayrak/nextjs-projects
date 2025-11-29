import { getMovies } from "@/lib/data";
import Link from "next/link";

export default async function Home() {

  const movies = await getMovies();

  return (
    <div className="flex flex-col gap-6 mt-5">

      {/* BAŞLIK VE GİRİŞ */}
      <section className="bg-red-400 dark:bg-blue-900 text-white p-4 rounded-xl text-center shadow-lg">
        <h1 className="sm:text-3xl text-2xl font-bold">Vizyondaki Filmler 🎬</h1>
      </section>

      {/* FİLM LİSTESİ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {movies.map((movie) => (

          <Link
            key={movie.id}
            href={`movie/${movie.id}`}
            className="block p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {movie.title}
              </h3>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded">
                {movie.year}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-3 line-clamp-2">
              {movie.description}
            </p>
          </Link>

        ))}
      </div>
    </div>
  );
}
