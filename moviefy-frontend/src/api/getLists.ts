import { apiFetch } from "./apiFetch";
import { getAuthorizationHeader } from "@/utils/accessToken";
import { ListsState } from "@/store/slices/listsSlice";

export async function getLists() {
  const authorizationHeader = getAuthorizationHeader();
  const requestURL = `/lists`;
  return await apiFetch<ListsState>(requestURL, {
    method: "GET",
    headers: { ...authorizationHeader },
  });
}
