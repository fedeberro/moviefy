import { ThemeToggle } from "./ThemeToggle";
import SignInButton from "../../Buttons/SignInButton";
import useAuth from "@/hooks/useAuth";
import UserAvatar from "./UserAvatar";

export default function Actions() {
  const { currentUser } = useAuth();
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      {!currentUser ? <SignInButton /> : <UserAvatar />}
    </div>
  );
}
