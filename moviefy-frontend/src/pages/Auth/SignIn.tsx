import LinkButton from "@/components/Buttons/LinkButton";
import { SignInForm } from "@/components/SignIn/SignInForm";
import { Paragraph, Title } from "@/components/Typography";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);

  return (
    <section className="flex items-center justify-center px-2 md:px-0 h-full m-auto">
      <div className="flex flex-col gap-8 w-full md:w-auto">
        <Title className="text-center">Iniciar sesión</Title>
        <SignInForm />
        <div className="flex items-center justify-center">
          <Paragraph secondary>¿No tenés cuenta?</Paragraph>
          <LinkButton path="/registrarse" variant={"link"}>
            Crear una cuenta
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
