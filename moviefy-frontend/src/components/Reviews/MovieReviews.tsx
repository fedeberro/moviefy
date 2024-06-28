import Section from "@/components/PageLayout/Section";
import { Subtitle, Paragraph } from "@/components/Typography";
import { MovieReview } from "@/interfaces/apiResults";
import { ReviewCard } from "./ReviewCard";

interface Props {
  reviews: MovieReview[] | null;
}

export default function MovieReviews({ reviews }: Props) {
  return (
    <Section className="flex flex-col p-4 gap-4 animate-section-in">
      <Subtitle className="w-full">Comentarios</Subtitle>
      {reviews && reviews.length > 0 ? (
        <div className="flex flex-col gap-4 w-full">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </div>
      ) : (
        <Paragraph secondary>No hay comentarios</Paragraph>
      )}
    </Section>
  );
}
