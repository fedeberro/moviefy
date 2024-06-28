import { CastCredit } from "@/interfaces/apiResults";
import Section from "@/components/PageLayout/Section";
import { Subtitle } from "@/components/Typography";
import MovieCarousel from "@/components/Movies/MovieCarousel";

interface Props {
  movies: CastCredit[];
}

export default function ActorMovies({ movies }: Props) {
  return (
    <Section className="flex flex-col p-4 gap-4 animate-section-in">
      <Subtitle className="w-full">Películas</Subtitle>
      <div className="flex flex-col gap-4 w-full md:px-12">
        <MovieCarousel movies={movies} />
      </div>
    </Section>
  );
}
