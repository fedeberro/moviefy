import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MovieReview } from "@/interfaces/apiResults";
import MovieRatingBadge from "@/components/Movies/MovieRatingBadge";
import { Paragraph } from "@/components/Typography";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getImageURL } from "@/utils/getImageURL";
import { ScrollArea } from "../ui/scroll-area";

interface Props {
  review: MovieReview;
}

export function ReviewCard({ review }: Props) {
  const format = (
    date: number | Date,
    locale: string,
    options?: Intl.DateTimeFormatOptions
  ) => new Intl.DateTimeFormat(locale, options).format(date);
  return (
    <Card className="w-full">
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage
                src={
                  review.author_details.avatar_path
                    ? getImageURL(review.author_details.avatar_path)
                    : ""
                }
                alt={review.author}
              />
              <AvatarFallback className="text-sm">
                {review.author[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {review.author}
          </div>
          <div className="gap-2 items-center hidden md:flex">
            <MovieRatingBadge rating={review.author_details.rating || 0} />
            <Paragraph secondary>
              {format(new Date(review.created_at), "es", { dateStyle: "long" })}
            </Paragraph>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-4">
        <ScrollArea className="h-36">
          <Paragraph className="p-2">{review.content}</Paragraph>
        </ScrollArea>
      </CardContent>
      <CardFooter className="md:hidden">
        <div className="flex gap-2 items-center justify-between w-full">
          <MovieRatingBadge rating={review.author_details.rating || 0} />
          <Paragraph secondary>
            {format(new Date(review.created_at), "es", { dateStyle: "long" })}
          </Paragraph>
        </div>
      </CardFooter>
    </Card>
  );
}
