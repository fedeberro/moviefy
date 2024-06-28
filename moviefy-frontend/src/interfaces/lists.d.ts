import { ListsState } from "@/store/slices/listsSlice";

export interface MovieInfo {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  genre_ids: number[];
}

export type ListTypes = keyof ListsState;
