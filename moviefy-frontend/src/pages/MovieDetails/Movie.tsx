import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetails as MovieDetailsT } from "@/interfaces/apiResults";
import { getMovieDetails } from "@/api/getMovieDetails";
import useLoading from "@/hooks/useLoading";
import MovieDetails from "@/components/Movies/MovieDetails/MovieDetails";
import NoResult from "./NoResult";
import MovieReviews from "@/components/Reviews/MovieReviews";
import MovieActors from "@/components/Actors/MovieActors";

export default function Movie() {
  const { movieID } = useParams();
  const { setLoading, loading } = useLoading();
  const [movie, setMovie] = useState<MovieDetailsT | null>(null);
  const [response, setResponse] = useState(false);

  useEffect(() => {
    if (movieID) {
      const loadingTimeout = setTimeout(() => setLoading(true), 500);
      getMovieDetails(movieID)
        .then((movieDetails) => {
          setMovie(movieDetails);
        })
        .finally(() => {
          clearTimeout(loadingTimeout);
          setLoading(false);
          setResponse(true);
        });
    }
  }, [movieID]);

  return movie ? (
    <div className="flex flex-col gap-4">
      <MovieDetails movie={movie} />
      <MovieActors movie={movie} />
      <MovieReviews reviews={movie.reviews.results} />
    </div>
  ) : (
    !loading && response && <NoResult />
  );
}
