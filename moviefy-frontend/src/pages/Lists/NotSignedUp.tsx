import PageResult from "@/components/PageLayout/PageResult";
import SignInButton from "@/components/Buttons/SignInButton";
import { TicketX } from "lucide-react";
import HomeButton from "@/components/Buttons/HomeButton";

export default function NotSignedUp() {
  return (
    <PageResult
      icon={<TicketX className="w-40 h-40 text-primary" />}
      title="No iniciaste sesión"
      description="Iniciá sesión para poder agregar películas a tu lista"
    >
      <HomeButton />
      <SignInButton />
    </PageResult>
  );
}
