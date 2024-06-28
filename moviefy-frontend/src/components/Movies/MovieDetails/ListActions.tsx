import AddToFavoritesButton from "@/components/Buttons/AddToFavoritesButton";
import AddToListButton from "@/components/Buttons/AddToListButton";
import AddToSeenButton from "@/components/Buttons/AddToSeenButton";
import useAuth from "@/hooks/useAuth";
import { MovieResult } from "@/interfaces/apiResults";
import { MovieInfo } from "@/interfaces/lists";

interface Props {
  movie: MovieInfo | MovieResult;
  className: string;
}

export default function ListActions({ movie, className }: Props) {
  const { currentUser } = useAuth();
  return (
    <div className={className}>
      {currentUser && (
        <>
          <AddToListButton movie={movie} />
          <AddToSeenButton movie={movie} className="basis-1/3" />
          <AddToFavoritesButton movie={movie} className="basis-1/3" />
        </>
      )}
    </div>
  );
}
