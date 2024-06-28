import { GENRES_ID } from "@/constants/genres";

type GenreKeys = keyof typeof GENRES_ID;

import {
  Bot,
  Crosshair,
  Drama,
  Ghost,
  Heart,
  Map,
  Popcorn,
  Rocket,
  Video,
  WandSparkles,
} from "lucide-react";

export const GENRES: GenreKeys[] = [
  "Action",
  "Adventure",
  "Comedy",
  "Documentary",
  "Family",
  "Fantasy",
  "Horror",
  "Romance",
  "Science_Fiction",
];

export const GENRE_ICONS: { [key: string]: React.ReactNode } = {
  Action: <Crosshair />,
  Adventure: <Map />,
  Animation: <Bot />,
  Comedy: <Drama />,
  Documentary: <Video />,
  Family: <Popcorn />,
  Fantasy: <WandSparkles />,
  Horror: <Ghost />,
  Romance: <Heart />,
  Science_Fiction: <Rocket />,
};
