import Section from "@/components/PageLayout/Section";
import MoviePoster from "@/components/Movies/MoviePoster";
import { getImageURL } from "@/utils/getImageURL";
import { type MovieDetails } from "@/interfaces/apiResults";
import {
  Title,
  Subtitle,
  Paragraph,
  Blockquote,
} from "@/components/Typography";
import MovieRatingBadge from "@/components/Movies/MovieRatingBadge";
import { Badge } from "@/components/ui/badge";
import { getMovieDuration } from "@/utils/getMovieDuration";
import { getMovieCredits } from "@/utils/getMovieCredits";
import ListActions from "./ListActions";
import MovieTrailer from "./MovieTrailer";
import { movieDetailsToInfo } from "@/utils/movieDetailsToInfo";

interface Props {
  movie: MovieDetails;
}

export default function MovieDetails({ movie }: Props) {
  return (
    <Section className="flex animate-section-in">
      {/*DESKTOP*/}
      <div className="hidden lg:block relative top-0 rounded overflow-hidden lg:basis-1/4">
        <MoviePoster src={getImageURL(movie.poster_path)} title={movie.title} />
        <ListActions
          movie={movieDetailsToInfo(movie)}
          className="absolute bottom-0 left-0 w-full p-4 flex gap-2"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 lg:basis-3/4">
        <img
          src={getImageURL(movie.backdrop_path)}
          alt={`Imagen de ${movie.title}`}
          className="rounded-lg aspect-video lg:hidden w-full"
        />
        {/*MOBILE*/}
        <ListActions
          movie={movieDetailsToInfo(movie)}
          className="w-full flex gap-2 lg:hidden"
        />
        <div className="flex items-center gap-2">
          <Title className="text-balance">
            {movie.title}{" "}
            <span className="text-2xl font-normal text-muted-foreground">
              ({movie.release_date.split("-")[0]})
            </span>
          </Title>
        </div>
        <div className="flex gap-2 flex-col lg:flex-row justify-start items-left lg:items-center ">
          <div className="flex gap-2 items-center justify-start order-2 lg:order-none">
            <MovieRatingBadge rating={movie.vote_average} />
            <Badge variant={"secondary"}>
              {getMovieDuration(movie.runtime)}
            </Badge>
            <Badge variant={"secondary"}>{movie.status}</Badge>
            <MovieTrailer movie={movie} />
          </div>
          <Paragraph secondary>
            {movie.genres.map((genre) => genre.name).join(" • ")}
          </Paragraph>
        </div>
        {movie.tagline && <Blockquote>{movie.tagline}</Blockquote>}
        <div className="flex flex-col gap-2">
          <Subtitle>Descripción</Subtitle>
          <Paragraph>{movie.overview}</Paragraph>
        </div>
        <div className="flex flex-col gap-2">
          <Subtitle>Créditos</Subtitle>
          <div className="flex gap-4 flex-wrap">
            {getMovieCredits(movie.credits).map((credit, index) => (
              <div className="flex flex-col" key={index}>
                <Paragraph>{credit?.name}</Paragraph>
                <Paragraph secondary>{credit?.credit}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
