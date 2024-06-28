import { useAppDispatch, useAppSelector } from "./store";
import {
  toggleLoadingState,
  setLoadingState,
} from "@/store/slices/loadingSlice";

export default function useLoading() {
  const loading = useAppSelector((state) => state.loading);
  const dispatch = useAppDispatch();

  const toggleLoading = () => {
    dispatch(toggleLoadingState());
  };
  const setLoading = (value: boolean) => {
    dispatch(setLoadingState(value));
  };

  return { loading, toggleLoading, setLoading };
}
