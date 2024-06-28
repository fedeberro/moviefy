import PageResult from "@/components/PageLayout/PageResult";
import { VerifyRecoverPasswordTokenForm } from "@/components/SignIn/VerifyRecoverPasswordTokenForm";
import { KeyRound } from "lucide-react";

export default function RecoverPassword() {
  return (
    <PageResult
      title="Restablecer contraseña"
      description="Te envíamos un e-mail con un token para restablecer tu contraseña. Revisá tu bandeja de entrada e ingresá el token de 6 dígitos para restablecer tu contraseña."
      icon={<KeyRound className="w-40 h-40 text-primary" />}
    >
      <VerifyRecoverPasswordTokenForm />
    </PageResult>
  );
}
