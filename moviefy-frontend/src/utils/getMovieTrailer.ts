import { MovieDetails } from "@/interfaces/apiResults";

export function getMovieTrailer(movie: MovieDetails) {
  return (
    movie.videos.results.find(
      (video) =>
        video.type === "Trailer" && video.official && video.site === "YouTube"
    ) || null
  );
}
