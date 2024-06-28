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
import TokenInput from "./TokenInput";
import { Input } from "../ui/input";
import { Paragraph } from "../Typography";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useLoading from "@/hooks/useLoading";
import { checkEmail } from "@/utils/checkEmail";
import { resendVerificationEmail, verifyEmail } from "@/api/verifyEmail";
import { toast } from "sonner";
import ErrorAlert from "../Alert/ErrorAlert";

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "El token debe tener 6 dígitos",
  }),
  email: z.string().email("Ingresá un e-mail válido"),
});

export function EmailVerificationForm() {
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: "",
      email: "",
    },
  });

  useEffect(() => {
    const email = searchParams.get("email") ?? "";
    if (email) {
      form.setValue("email", email);
    }
  }, [searchParams]);

  const handleResendToken = () => {
    const email = form.getValues("email");
    try {
      checkEmail(email);
    } catch (error) {
      setError("El e-mail ingresado no es válido");
      return;
    }
    setLoading(true);
    setError("");
    resendVerificationEmail(email)
      .then(() => {
        toast.success("E-mail enviado", {
          description: `Revisá la bandeja de entrada de ${email}`,
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    verifyEmail(data.email, data.token)
      .then(() => {
        toast.success("Tu e-mail fue verificado exitosamente");
        navigate("/registrarse/confirmacion");
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Ingresá tu e-mail"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="token"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token de verificación</FormLabel>
                <FormControl>
                  <TokenInput field={{ ...field }} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Verificar</Button>
          <div className="flex justify-center items-center">
            <Paragraph secondary>¿No recibiste tu token?</Paragraph>
            <Button variant={"link"} onClick={handleResendToken} type="button">
              Reenviar token
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
