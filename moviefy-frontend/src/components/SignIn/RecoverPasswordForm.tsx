"use client";

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
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useLoading from "@/hooks/useLoading";
import ErrorAlert from "../Alert/ErrorAlert";
import PasswordField from "./PasswordField";
import { resetPassword } from "@/api/recoverPassword";
import { toast } from "sonner";

const FormSchema = z.object({
  newPassword: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export function RecoverPasswordForm() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    if (!state) {
      navigate("/iniciar-sesion/restablecer-contraseña");
      return;
    }
    const { email, token } = state;
    setEmail(email ?? "");
    setToken(token ?? "");
  }, [location]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setError("");
    setLoading(true);
    resetPassword(email, token, data.newPassword)
      .then(() => {
        toast.success("Contraseña restablecida con éxito");
        navigate("/iniciar-sesion");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      {error && <ErrorAlert error={error} />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-fit"
        >
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nueva contraseña</FormLabel>
                <FormControl>
                  <PasswordField field={{ ...field }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Restablecer contraseña</Button>
        </form>
      </Form>
    </div>
  );
}
