import { Badge, BadgeProps } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Props extends BadgeProps {
  rating: number;
  className?: string;
}

export default function MovieRatingBadge({
  rating,
  className = "",
  ...props
}: Props) {
  return (
    <Badge className={className} {...props}>
      <Star className="w-4 h-4 mr-1" fill="white" />
      {rating.toFixed(1)}
    </Badge>
  );
}
