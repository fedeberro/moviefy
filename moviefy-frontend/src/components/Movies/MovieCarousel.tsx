import { CastCredit, MovieResult } from "@/interfaces/apiResults";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import MovieCarouselItem from "./MovieCarouselItem";
import MovieSkeleton from "./MovieSkeleton";

interface Props {
  movies: MovieResult[] | CastCredit[];
}

export default function MovieCarousel({ movies }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {movies.length !== 0
          ? movies.map((movie) => (
              <MovieCarouselItem movie={movie} key={movie.id} />
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <MovieSkeleton key={index} />
            ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:inline-flex" />
      <CarouselNext className="hidden md:inline-flex" />
    </Carousel>
  );
}
