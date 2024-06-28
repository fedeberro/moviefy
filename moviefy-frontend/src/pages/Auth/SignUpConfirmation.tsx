import HomeButton from "@/components/Buttons/HomeButton";
import SignInButton from "@/components/Buttons/SignInButton";
import PageResult from "@/components/PageLayout/PageResult";
import { BadgeCheck } from "lucide-react";

export default function SignUpConfirmation() {
  return (
    <PageResult
      title="Te registraste exitosamente"
      description="Ya estás listo para usar todas las funcionalidades de Moviefy. Iniciá sesión para comenzar."
      icon={<BadgeCheck className="w-40 h-40 text-primary" />}
    >
      <HomeButton />
      <SignInButton />
    </PageResult>
  );
}
