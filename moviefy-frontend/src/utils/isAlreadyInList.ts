import { MovieInfo } from "@/interfaces/lists";

export function isAlreadyInList(list: MovieInfo[], movie: MovieInfo) {
  return list.some((listMovie) => listMovie.id === movie.id);
}
