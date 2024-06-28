import { MovieDetails } from "@/interfaces/apiResults";
import { MovieInfo } from "@/interfaces/lists";

export function movieDetailsToInfo(movie: MovieDetails): MovieInfo {
  const { id, poster_path, title, vote_average, genres } = movie;
  const genre_ids = genres.map((g) => g.id);
  return {
    id,
    poster_path,
    title,
    vote_average,
    genre_ids,
  };
}
