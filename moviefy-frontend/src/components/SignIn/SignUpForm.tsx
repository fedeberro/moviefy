import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PasswordField from "./PasswordField";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import ErrorAlert from "../Alert/ErrorAlert";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "El nombre de usuario tiene que tener al menos 2 caracteres")
    .max(16, "El nombre de usuario tiene que tener menos de 16 caracteres"),
  email: z.string().email("Ingresá un e-mail válido"),
  password: z
    .string()
    .min(8, "La contraseña tiene que tener al menos 8 caracteres"),
});

export function SignUpForm() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    signUp(values)
      .then(() => {
        navigate(`/registrarse/verificar-email?email=${values.email}`);
      })
      .catch((error) => {
        setError(error.message);
      });
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
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de usuario</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
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
                  <PasswordField field={{ ...field }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-2">
            Registrarse
          </Button>
        </form>
      </Form>
    </div>
  );
}
