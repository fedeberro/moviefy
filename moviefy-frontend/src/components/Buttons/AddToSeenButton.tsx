import { Check, X } from "lucide-react";
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

export default function AddToSeenButton({ className, movie }: Props) {
  const { seen, addMovieToList, removeMovieFromList } = useLists();

  const checked = useMemo(() => isAlreadyInList(seen, movie), [seen, movie]);

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
        list: "seen",
        movie: movieObject,
      });
    } else {
      addMovieToList({
        list: "seen",
        movie: movieObject,
      });
    }
  };

  return (
    <Button
      className={`w-full z-[2] ${className}`}
      icon={checked ? <X /> : <Check />}
      variant={checked ? "destructive" : "secondary"}
      onClick={handleClick}
      tooltip={checked ? "Eliminar de vistas" : "Agregar a vistas"}
    />
  );
}
