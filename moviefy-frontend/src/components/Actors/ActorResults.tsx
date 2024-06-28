import { Actor } from "@/interfaces/apiResults";
import ActorCard from "./ActorCard";

interface Props {
  results: Actor[];
}

export default function ActorResults({ results }: Props) {
  return (
    <article className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] gap-2 md:gap-4 items-center justify-center">
      {results.map((actor) => (
        <ActorCard actor={actor} key={actor.id} />
      ))}
    </article>
  );
}
