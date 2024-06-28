import { MovieResult } from "@/interfaces/apiResults";
import MovieCard from "./MovieCard";
import { MovieInfo } from "@/interfaces/lists";
import { useMemo } from "react";
import PageResult from "../PageLayout/PageResult";
import { Film } from "lucide-react";

interface Props {
  results: MovieResult[] | MovieInfo[];
  filters?: MovieResultsFilter;
}

export interface MovieResultsFilter {
  query: string;
  genre_ids: number[];
}

export default function MovieResults({ results, filters }: Props) {
  const filteredResults = useMemo(() => {
    if (!filters) return results;
    const { query, genre_ids } = filters;
    let filtered = results;
    if (query)
      filtered = filtered.filter((m) =>
        m.title.toLowerCase().includes(query.toLowerCase())
      );
    if (genre_ids.length !== 0)
      filtered = filtered.filter((m) =>
        m.genre_ids.some((genre) => genre_ids.includes(genre))
      );

    return filtered;
  }, [results, filters]);

  return filteredResults.length !== 0 ? (
    <article className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-2 md:gap-4 items-center justify-center">
      {filteredResults.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </article>
  ) : (
    <PageResult
      icon={<Film className="w-40 h-40 text-primary" />}
      title="No se encontraron resultados"
      description=""
    ></PageResult>
  );
}
