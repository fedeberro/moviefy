import useAuth from "@/hooks/useAuth";
import useLoading from "@/hooks/useLoading";
import { PropsWithChildren, useEffect } from "react";

export default function AuthControl({ children }: PropsWithChildren) {
  const { currentUser, authToken } = useAuth();
  const { setLoading } = useLoading();

  useEffect(() => {
    if (!currentUser) {
      setLoading(true);
      authToken().finally(() => setLoading(false));
    }
  }, [currentUser]);

  return children;
}
