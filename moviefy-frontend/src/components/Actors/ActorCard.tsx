import { Actor, Cast } from "@/interfaces/apiResults";
import { getImageURL } from "@/utils/getImageURL";
import { Link } from "react-router-dom";
import ActorImage from "./ActorImage";

interface Props {
  actor: Cast | Actor;
  className?: string;
}

export default function ActorCard({ actor, className = "" }: Props) {
  return (
    <figure className={`rounded overflow-hidden relative ${className}`}>
      <ActorImage
        src={getImageURL(actor.profile_path || "null")}
        title={actor.name}
      />
      <div className="items-center flex-col absolute justify-end w-full h-full top-0 left-0 p-2 md:p-3 flex md:opacity-0 hover:opacity-100 transition-opacity duration-300 gap-2">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-black from-white hidden md:block" />
        <Link
          to={`/persona/${actor.id}`}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="w-full z-10 gap-2 flex-col hidden md:flex justify-end h-full">
          <Link
            to={`/persona/${actor.id}`}
            className="absolute top-0 left-0 w-full h-full"
          />
          <div className="w-full gap-2 flex-col flex">
            <span className="text-center font-bold">{actor.name}</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
