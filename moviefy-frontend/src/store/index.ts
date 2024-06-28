import { configureStore, combineReducers, Middleware } from "@reduxjs/toolkit";
import authReducer, { setCurrentUser } from "./slices/authSlice";
import loadingReducer from "./slices/loadingSlice";
import listsReducer, {
  deleteMovieFromList,
  pushMovieToList,
  resetListsState,
  rollbackDelete,
  rollbackPush,
  setListsState,
} from "./slices/listsSlice";
import { addMovieToList } from "@/api/addMovieToList";
import { toast } from "sonner";
import { removeMovieFromList } from "@/api/removeMovieFromList";
import { getLists } from "@/api/getLists";

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const previousState = store.getState() as RootState;
    next(action);

    if (setCurrentUser.match(action)) {
      store.dispatch(resetListsState());
      if (action.payload !== null) {
        getLists().then((lists) => {
          store.dispatch(setListsState(lists));
        });
      }
    }
    if (pushMovieToList.match(action)) {
      const payload = action.payload;
      const { movie, list } = payload;

      addMovieToList(movie.id, list)
        .then(() => {
          toast.success(`"${movie.title}"`, {
            description: "Agregada a la lista.",
          });
        })
        .catch(() => {
          store.dispatch(rollbackPush(payload));
          toast.error(`"${movie.title}"`, {
            description: "No se pudo agregar a la lista.",
          });
        });
    }
    if (deleteMovieFromList.match(action)) {
      const payload = action.payload;
      const { movie, list } = payload;
      const index = previousState.lists[list].findIndex(
        (m) => m.id === movie.id
      );
      removeMovieFromList(movie.id, list)
        .then(() => {
          toast.success(`"${movie.title}"`, {
            description: "Eliminada de la lista.",
          });
        })
        .catch(() => {
          store.dispatch(rollbackDelete({ ...payload, index }));
          toast.error(`"${movie.title}"`, {
            description: `No se pudo eliminar de la lista.`,
          });
        });
    }
  };

const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  lists: listsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
