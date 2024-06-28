import { MovieDetails } from "@/interfaces/apiResults";
import { getMovieTrailer } from "@/utils/getMovieTrailer";
import { useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/Buttons/Button";

interface Props {
  movie: MovieDetails;
}

export default function MovieTrailer({ movie }: Props) {
  const trailer = useMemo(() => getMovieTrailer(movie), [movie]);

  return (
    trailer && (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"link"}>Ver tráiler</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{movie.title}</DialogTitle>
            <DialogDescription>
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded w-max md:w-[560px] md:h-[315px]"
              ></iframe>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  );
}
