import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { type ActorDetails as ActorDetailsT } from "@/interfaces/apiResults";
import { getActorDetails } from "@/api/getActorDetails";
import useLoading from "@/hooks/useLoading";
import ActorDetails from "@/components/Actors/ActorDetails/ActorDetails";
import NoResult from "./NoResult";
import ActorMovies from "@/components/Actors/ActorDetails/ActorMovies";

export default function Actor() {
  const { personID } = useParams();
  const { setLoading, loading } = useLoading();
  const [actor, setActor] = useState<ActorDetailsT | null>(null);
  const [response, setResponse] = useState(false);

  useEffect(() => {
    if (personID) {
      const loadingTimeout = setTimeout(() => setLoading(true), 500);
      getActorDetails(personID)
        .then((actorDetails) => {
          setActor(actorDetails);
        })
        .finally(() => {
          clearTimeout(loadingTimeout);
          setLoading(false);
          setResponse(true);
        });
    }
  }, [personID]);

  return actor ? (
    <div className="flex flex-col gap-4">
      <ActorDetails actor={actor} />
      {actor.movie_credits.cast.length !== 0 && (
        <ActorMovies movies={actor.movie_credits.cast} />
      )}
    </div>
  ) : (
    !loading && response && <NoResult />
  );
}
