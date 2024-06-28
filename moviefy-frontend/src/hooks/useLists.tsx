import { useAppDispatch, useAppSelector } from "./store";
import {
  MovieListActionPayload,
  deleteMovieFromList,
  pushMovieToList,
} from "@/store/slices/listsSlice";
import useAuth from "./useAuth";
import { toast } from "sonner";

export default function useLists() {
  const lists = useAppSelector((state) => state.lists);
  const { currentUser } = useAuth();
  const dispatch = useAppDispatch();

  const { watchlist, seen, favorites } = lists;

  const addMovieToList = (payload: MovieListActionPayload) => {
    if (!currentUser) {
      toast.error("Iniciá sesión para usar listas.");
      return;
    }
    dispatch(pushMovieToList(payload));
  };

  const removeMovieFromList = (payload: MovieListActionPayload) => {
    if (!currentUser) {
      toast.error("Iniciá sesión para usar listas.");
      return;
    }
    dispatch(deleteMovieFromList(payload));
  };

  return {
    lists,
    watchlist,
    seen,
    favorites,
    addMovieToList,
    removeMovieFromList,
  };
}
