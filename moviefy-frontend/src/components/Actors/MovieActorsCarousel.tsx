import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import ActorCarouselItem from "./ActorCarouselItem";
import { Cast } from "@/interfaces/apiResults";
import MovieSkeleton from "@/components/Movies/MovieSkeleton";

interface Props {
  actors: Cast[];
}

export default function MovieActorsCarousel({ actors }: Props) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {actors.length !== 0
          ? actors.map((actor) => (
              <ActorCarouselItem actor={actor} key={actor.id} />
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
