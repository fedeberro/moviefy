import Section from "@/components/PageLayout/Section";
import { getImageURL } from "@/utils/getImageURL";
import { type ActorDetails } from "@/interfaces/apiResults";
import {
  Title,
  Subtitle,
  Paragraph,
  Blockquote,
} from "@/components/Typography";
import { Badge } from "@/components/ui/badge";
import ActorImage from "@/components/Actors/ActorImage";
import { getDate } from "@/utils/getDate";

interface Props {
  actor: ActorDetails;
}

export default function ActorDetails({ actor }: Props) {
  return (
    <Section className="flex animate-section-in">
      <div className="hidden lg:block relative top-0 rounded overflow-hidden lg:basis-1/4">
        <ActorImage
          src={getImageURL(actor.profile_path || "null")}
          title={actor.name}
        />
      </div>
      <div className="flex flex-col gap-2 p-4 lg:basis-3/4">
        <div className="flex items-center gap-2">
          <Title className="text-balance">{actor.name}</Title>
        </div>
        <div className="flex gap-2 flex-col lg:flex-row justify-start items-left lg:items-center ">
          <div className="flex gap-2 items-center justify-start order-2 lg:order-none">
            <Badge>{actor.gender === 1 ? "Femenino" : "Masculino"}</Badge>
            <Badge variant={"secondary"}>{actor.known_for_department}</Badge>
            <Badge variant={"secondary"}>
              {getDate(actor.birthday)}
              {actor.deathday && ` - ${getDate(actor.deathday)}`}
            </Badge>
          </div>
        </div>
        <Blockquote>{actor.place_of_birth}</Blockquote>
        <div className="flex flex-col gap-2">
          <Subtitle>Biografía</Subtitle>
          {actor.biography ? (
            <Paragraph>{actor.biography}</Paragraph>
          ) : (
            <Paragraph secondary>No hay biografía</Paragraph>
          )}
        </div>
      </div>
    </Section>
  );
}
