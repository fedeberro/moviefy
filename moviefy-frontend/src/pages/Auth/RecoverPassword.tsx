import PageResult from "@/components/PageLayout/PageResult";
import { RecoverPasswordForm } from "@/components/SignIn/RecoverPasswordForm";
import { KeyRound } from "lucide-react";

export default function RecoverPassword() {
  return (
    <PageResult
      title="Restablecer contraseña"
      description="Ingresá tu nueva contraseña para restablecer tu cuenta."
      icon={<KeyRound className="w-40 h-40 text-primary" />}
    >
      <RecoverPasswordForm />
    </PageResult>
  );
}
