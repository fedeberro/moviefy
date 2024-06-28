import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/Buttons/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import PasswordField from "./PasswordField";
import { useState } from "react";
import LinkButton from "@/components/Buttons/LinkButton";
import ErrorAlert from "../Alert/ErrorAlert";

const formSchema = z.object({
  emailOrUsername: z.string(),
  password: z
    .string()
    .min(8, "La contraseña tiene que tener al menos 8 caracteres"),
});

export function SignInForm() {
  const { signIn } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    signIn(values)
      .then(() => navigate("/"))
      .catch((error) => setError(error.message));
  }
  return (
    <div className="flex flex-col gap-2 items-center">
      {error && <ErrorAlert error={error} />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2"
        >
          <FormField
            control={form.control}
            name="emailOrUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail o nombre de usuario</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className={`${error ? "border-destructive" : ""}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <PasswordField
                    field={{ ...field }}
                    className={`${error ? "border-destructive" : ""}`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LinkButton
            path="/iniciar-sesion/enviar-email-recuperacion"
            type="button"
            variant={"link"}
          >
            Olvidé mi contraseña
          </LinkButton>
          <Button type="submit">Iniciar sesión</Button>
        </form>
      </Form>
    </div>
  );
}
