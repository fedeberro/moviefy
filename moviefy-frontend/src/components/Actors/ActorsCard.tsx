import { getImageURL } from "@/utils/getImageURL";
import MoviePoster from "@/components/Movies/MoviePoster";
import { Cast } from "@/interfaces/apiResults";

interface Props {
  actor: Cast;
}

export default function ActorsCard({ actor }: Props) {
  return (
    <MoviePoster
      src={getImageURL(actor.profile_path || "")}
      title={actor.name}
    />
  );
}
