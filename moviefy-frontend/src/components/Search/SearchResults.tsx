import { Actor, MovieResult } from "@/interfaces/apiResults";
import MovieResults from "@/components/Movies/MovieResults";
import PageResult from "@/components/PageLayout/PageResult";
import { useSearchParams } from "react-router-dom";
import useLoading from "@/hooks/useLoading";
import { useEffect, useState } from "react";
import { getMovieBySearch } from "@/api/getMovieBySearch";
import DiscoverButton from "@/components/Buttons/DiscoverButton";
import { Clapperboard } from "lucide-react";
import { getActorsBySearch } from "@/api/getActorsBySearch";
import ActorResults from "../Actors/ActorResults";
import { Pagination } from "../PageLayout/Pagination";
import { PAGE_SIZE } from "@/constants/pageSize";

interface Props {
  searchType: "people" | "movies";
}

export default function SearchResults({ searchType }: Props) {
  const [searchParams] = useSearchParams();
  const { setLoading, loading } = useLoading();
  const [movies, setMovies] = useState<MovieResult[] | null>(null);
  const [actors, setActors] = useState<Actor[] | null>(null);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setQuery(query);
  }, [searchParams]);

  useEffect(() => {
    if (query) {
      setLoading(true);
      if (searchType === "movies") {
        getMovieBySearch(query, page)
          .then((result) => {
            if (result.total_results === 0) return setMovies(null);
            if (result.results) {
              setMovies(result.results);
              setTotalResults(result.total_results);
            }
          })
          .finally(() => setLoading(false));
      } else if (searchType === "people") {
        getActorsBySearch(query, page)
          .then((result) => {
            if (result.total_results === 0) return setActors(null);
            if (result.results) {
              {
                setActors(result.results);
                setTotalResults(result.total_results);
              }
            }
          })
          .finally(() => setLoading(false));
      }
    } else {
      setMovies(null);
      setActors(null);
    }
  }, [query, page, searchType]);

  return searchType === "movies" && movies ? (
    <div className="flex flex-col gap-2">
      <MovieResults results={movies} />
      {totalResults > movies.length && (
        <Pagination
          pageSize={PAGE_SIZE}
          totalResults={totalResults}
          page={page}
          changePage={(value: number) => setPage(value)}
        />
      )}
    </div>
  ) : searchType === "people" && actors ? (
    <div className="flex flex-col gap-2">
      <ActorResults results={actors} />
      {totalResults > actors.length && (
        <Pagination
          pageSize={PAGE_SIZE}
          totalResults={totalResults}
          page={page}
          changePage={(value: number) => setPage(value)}
        />
      )}
    </div>
  ) : (
    !loading && (
      <PageResult
        title="No se encontraron resultados"
        description=""
        icon={<Clapperboard className="w-40 h-40 text-primary" />}
      >
        <DiscoverButton />
      </PageResult>
    )
  );
}
