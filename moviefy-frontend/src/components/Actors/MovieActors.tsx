import { MovieDetails } from "@/interfaces/apiResults";
import Section from "@/components/PageLayout/Section";
import { Subtitle } from "@/components/Typography";
import MovieActorsCarousel from "./MovieActorsCarousel";

interface Props {
  movie: MovieDetails;
}

export default function MovieActors({ movie }: Props) {
  return (
    <Section className="flex flex-col p-4 gap-4 animate-section-in">
      <Subtitle className="w-full">Actores</Subtitle>
      <div className="flex flex-col gap-4 w-full md:px-12">
        <MovieActorsCarousel actors={movie.credits.cast} />
      </div>
    </Section>
  );
}
