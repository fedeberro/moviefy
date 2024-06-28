import useLists from "@/hooks/useLists";
import { Bookmark, Check, Heart } from "lucide-react";

interface Props {
  movieID: number;
}

export default function ListStatus({ movieID }: Props) {
  const { watchlist, favorites, seen } = useLists();
  const iconClass =
    "w-7 h-7 bg-black bg-opacity-80 rounded-full p-[6px] text-primary";
  return (
    <div className="absolute top-2 left-2 flex gap-1">
      {watchlist.some((movie) => movie.id === movieID) && (
        <Bookmark className={iconClass} fill="#DC2626" />
      )}
      {seen.some((movie) => movie.id === movieID) && (
        <Check className={iconClass} />
      )}
      {favorites.some((movie) => movie.id === movieID) && (
        <Heart className={iconClass} fill="#DC2626" />
      )}
    </div>
  );
}
