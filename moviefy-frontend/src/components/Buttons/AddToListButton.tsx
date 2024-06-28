import { Bookmark } from "lucide-react";
import Button from "./Button";
import { MovieInfo } from "@/interfaces/lists";
import { MovieResult } from "@/interfaces/apiResults";
import useLists from "@/hooks/useLists";
import { useMemo } from "react";
import { isAlreadyInList } from "@/utils/isAlreadyInList";

interface Props {
  className?: string;
  iconOnly?: boolean;
  movie: MovieResult | MovieInfo;
}

export default function AddToListButton({
  className,
  iconOnly = false,
  movie,
}: Props) {
  const { watchlist, addMovieToList, removeMovieFromList } = useLists();

  const checked = useMemo(
    () => isAlreadyInList(watchlist, movie),
    [watchlist, movie]
  );

  const handleClick = () => {
    const movieObject = {
      id: movie.id,
      poster_path: movie.poster_path,
      title: movie.title,
      vote_average: movie.vote_average,
      genre_ids: movie.genre_ids,
    };
    if (checked) {
      removeMovieFromList({
        list: "watchlist",
        movie: movieObject,
      });
    } else {
      addMovieToList({
        list: "watchlist",
        movie: movieObject,
      });
    }
  };

  return (
    <Button
      className={`w-full z-[2] ${className}`}
      icon={<Bookmark fill={`${checked ? "white" : "transparent"}`} />}
      onClick={handleClick}
      tooltip={checked ? "Eliminar de watchlist" : "Agregar a watchlist"}
    >
      {!iconOnly && checked ? "Agregada" : "Agregar"}
    </Button>
  );
}
