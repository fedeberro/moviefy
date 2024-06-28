import { MovieInfo } from "@/interfaces/lists";
import { isAlreadyInList } from "@/utils/isAlreadyInList";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ListsState {
  watchlist: MovieInfo[];
  seen: MovieInfo[];
  favorites: MovieInfo[];
}

export interface MovieListActionPayload {
  movie: MovieInfo;
  list: keyof ListsState;
}

export interface RollbackMovieListActionPayload {
  movie: MovieInfo;
  list: keyof ListsState;
  index: number;
}

const initialState: ListsState = { watchlist: [], seen: [], favorites: [] };

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    setListsState: (_, action: PayloadAction<ListsState>) => {
      return action.payload;
    },
    resetListsState: () => {
      return initialState;
    },
    pushMovieToList: (state, action: PayloadAction<MovieListActionPayload>) => {
      const { movie, list } = action.payload;
      if (!isAlreadyInList(state[list], movie)) {
        state[list].push(movie);
      }
    },
    deleteMovieFromList: (
      state,
      action: PayloadAction<MovieListActionPayload>
    ) => {
      const { movie, list } = action.payload;
      state[list] = state[list].filter(
        (listMovie) => listMovie.id !== movie.id
      );
    },
    rollbackPush: (state, action: PayloadAction<MovieListActionPayload>) => {
      const { movie, list } = action.payload;
      state[list] = state[list].filter(
        (listMovie) => listMovie.id !== movie.id
      );
    },
    rollbackDelete: (
      state,
      action: PayloadAction<RollbackMovieListActionPayload>
    ) => {
      const { movie, list, index } = action.payload;
      state[list].splice(index, 0, movie);
    },
  },
});

export default listsSlice.reducer;

export const {
  setListsState,
  pushMovieToList,
  deleteMovieFromList,
  resetListsState,
  rollbackDelete,
  rollbackPush,
} = listsSlice.actions;
