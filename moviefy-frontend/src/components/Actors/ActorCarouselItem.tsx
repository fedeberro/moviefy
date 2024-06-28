import { Cast } from "@/interfaces/apiResults";
import { CarouselItem } from "@/components/ui/carousel";
import ActorCard from "./ActorCard";

interface Props {
  actor: Cast;
}

export default function ActorCarouselItem({ actor }: Props) {
  return (
    <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.2857143%]">
      <ActorCard actor={actor} />
    </CarouselItem>
  );
}
