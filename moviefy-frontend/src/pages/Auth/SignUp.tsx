import { SignUpForm } from "@/components/SignIn/SignUpForm";
import { Title, Paragraph } from "@/components/Typography";
import LinkButton from "@/components/Buttons/LinkButton";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignUp() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);

  return (
    <section className="flex items-center justify-center px-2 md:px-0 h-full m-auto">
      <div className="flex flex-col gap-8 w-full md:w-auto">
        <Title className="text-center">Crear una cuenta</Title>
        <SignUpForm />
        <div className="flex items-center justify-center">
          <Paragraph secondary>¿Ya tenés una cuenta?</Paragraph>
          <LinkButton path="/iniciar-sesion" variant={"link"}>
            Iniciar sesión
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
