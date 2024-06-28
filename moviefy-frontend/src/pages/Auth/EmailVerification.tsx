import PageResult from "@/components/PageLayout/PageResult";
import { EmailVerificationForm } from "@/components/SignIn/EmailVerificationForm";
import { Mail } from "lucide-react";

export default function EmailVerification() {
  return (
    <PageResult
      title="Verifica tu dirección de e-mail"
      description="Te envíamos un e-mail con un token para verificar tu dirección de e-mail. Revisá tu bandeja de entrada e ingresá el token de 6 dígitos para activar tu cuenta."
      icon={<Mail className="w-40 h-40 text-primary" />}
    >
      <EmailVerificationForm />
    </PageResult>
  );
}
