import { setCurrentUser, setLoadingState } from "@/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "./store";
import { SignInForm, SignUpForm, User } from "@/interfaces/user";
import { authAccessToken, authSignIn, authSignUp } from "@/api/auth";
import { toast } from "sonner";

export default function useAuth() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const { isLoading, currentUser } = auth;

  const updateLoadingState = (value: boolean) => {
    dispatch(setLoadingState(value));
  };

  const updateCurrentUser = (value: User | null) => {
    dispatch(setCurrentUser(value));
  };

  const signUp = async (values: SignUpForm) => {
    return authSignUp(values).then(() => {
      toast.success(`Bienvenido/a ${values.username} a Moviefy!`, {
        description: "Tu usuario se creó correctamente.",
      });
    });
  };

  const signIn = async (values: SignInForm) => {
    return authSignIn(values).then((result) => {
      const { username, email, avatar, id } = result.user;
      localStorage.setItem("accessToken", result.accessToken);
      updateCurrentUser({ username, email, avatar, id });
      toast.success(`Bienvenido/a devuelta ${username}!`, {
        description: "Iniciaste sesión correctamente.",
      });
    });
  };

  const authToken = async () => {
    return authAccessToken().then((result) => {
      const { username, email, avatar, id } = result.user;
      updateCurrentUser({ username, email, avatar, id });
      toast.success(`Bienvenido/a devuelta ${username}!`);
    });
  };

  const signOut = () => {
    localStorage.removeItem("accessToken");
    updateCurrentUser(null);
  };

  return {
    isLoading,
    currentUser,
    updateCurrentUser,
    updateLoadingState,
    signUp,
    signIn,
    authToken,
    signOut,
  };
}
