import MoviePoster from "./MoviePoster";
import { CastCredit, MovieResult } from "@/interfaces/apiResults";
import { getImageURL } from "@/utils/getImageURL";
import AddToListButton from "@/components/Buttons/AddToListButton";
import MovieRatingBadge from "./MovieRatingBadge";
import { MovieInfo } from "@/interfaces/lists";
import AddToFavoritesButton from "@/components/Buttons/AddToFavoritesButton";
import AddToSeenButton from "@/components/Buttons/AddToSeenButton";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import ListStatus from "./ListStatus";

interface Props {
  movie: MovieResult | MovieInfo | CastCredit;
  className?: string;
}

export default function MovieCard({ movie, className = "" }: Props) {
  const { currentUser } = useAuth();
  return (
    <figure
      className={`rounded relative ${className} hover:scale-105 hover:z-10 transition-transform`}
    >
      <MoviePoster src={getImageURL(movie.poster_path)} title={movie.title} />
      <MovieRatingBadge
        rating={movie.vote_average}
        className="absolute top-2 right-2"
      />
      <ListStatus movieID={movie.id} />
      <div className="items-center flex-col absolute justify-end w-full h-full top-0 left-0 p-2 md:p-3 flex md:opacity-0 hover:opacity-100 transition-opacity duration-300 gap-2">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-black from-white hidden md:block" />
        <Link
          to={`/pelicula/${movie.id}`}
          className="absolute top-0 left-0 w-full h-full md:hidden"
        />
        <div className="w-full z-10 gap-2 flex-col hidden md:flex justify-between h-full">
          <Link
            to={`/pelicula/${movie.id}`}
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="flex gap-2 w-full">
            {currentUser && (
              <>
                <AddToSeenButton movie={movie} />
                <AddToFavoritesButton movie={movie} />
              </>
            )}
          </div>
          <div className="w-full gap-2 flex-col flex">
            <span className="text-center font-bold">{movie.title}</span>
            <div className="flex gap-2 w-full">
              {currentUser && <AddToListButton movie={movie} />}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
