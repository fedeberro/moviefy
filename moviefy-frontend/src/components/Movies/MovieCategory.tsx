import { Subtitle } from "@/components/Typography";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "@/api/getTrendingMovies";
import { APIResponse, MovieResult } from "@/interfaces/apiResults";
import { getMoviesByGenre } from "@/api/getMoviesByGenre";
import MovieCarousel from "./MovieCarousel";

interface Props {
  category: string;
  icon: React.ReactNode;
  genreID?: string;
}

export default function MovieCategory({ category, icon, genreID }: Props) {
  const [movieResults, setMovieResults] =
    useState<APIResponse<MovieResult> | null>(null);

  useEffect(() => {
    if (genreID)
      getMoviesByGenre(genreID).then((response) => setMovieResults(response));
    else getTrendingMovies().then((response) => setMovieResults(response));
  }, [genreID]);

  return (
    <article className="flex flex-col gap-2 w-full md:px-12">
      <Subtitle>
        <div className="flex gap-2 items-center justify-start">
          <span>{icon}</span>
          <span>{category}</span>
        </div>
      </Subtitle>
      <MovieCarousel
        movies={movieResults?.results ? movieResults.results : []}
      />
    </article>
  );
}
