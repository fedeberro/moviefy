import { CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function MovieSkeleton() {
  return (
    <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.2857143%]">
      <Skeleton className="rounded aspect-[2/3]" />
    </CarouselItem>
  );
}
