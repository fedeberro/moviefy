import { Heart, HeartCrack } from "lucide-react";
import Button from "./Button";
import { MovieInfo } from "@/interfaces/lists";
import { MovieResult } from "@/interfaces/apiResults";
import useLists from "@/hooks/useLists";
import { useMemo } from "react";
import { isAlreadyInList } from "@/utils/isAlreadyInList";

interface Props {
  className?: string;
  movie: MovieInfo | MovieResult;
}

export default function AddToFavoritesButton({ className, movie }: Props) {
  const { favorites, addMovieToList, removeMovieFromList } = useLists();

  const checked = useMemo(
    () => isAlreadyInList(favorites, movie),
    [favorites, movie]
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
        list: "favorites",
        movie: movieObject,
      });
    } else {
      addMovieToList({
        list: "favorites",
        movie: movieObject,
      });
    }
  };

  return (
    <Button
      className={`w-full z-[2] ${className}`}
      icon={checked ? <HeartCrack /> : <Heart />}
      variant={checked ? "destructive" : "secondary"}
      onClick={handleClick}
      tooltip={checked ? "Eliminar de favoritas" : "Agregar a favoritas"}
    />
  );
}
