import Button from "@/components/Buttons/Button";
import PageResult from "@/components/PageLayout/PageResult";
import { Input } from "@/components/ui/input";
import { KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { sendRecoveryEmail } from "@/api/recoverPassword";
import ErrorAlert from "@/components/Alert/ErrorAlert";
import useLoading from "@/hooks/useLoading";

const formSchema = z.object({
  email: z.string().email("Ingresá un e-mail válido"),
});

export default function SendRecoveryEmail() {
  const navigate = useNavigate();
  const { setLoading } = useLoading();
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    sendRecoveryEmail(values.email)
      .then(() => {
        toast.success("E-mail enviado", {
          description: `Revisá la bandeja de entrada de ${values.email}`,
        });
        navigate(
          `/iniciar-sesion/restablecer-contraseña?email=${values.email}`
        );
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <PageResult
      title="Restablecer contraseña"
      description="Ingresá tu e-mail a continuación. Te vamos a enviar un token de verificación para recuperar tu contraseña."
      icon={<KeyRound className="w-40 h-40 text-primary" />}
    >
      <div className="flex flex-col gap-2">
        <Form {...form}>
          {error && <ErrorAlert error={error} />}
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
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
            <Button type="submit">Enviar</Button>
          </form>
        </Form>
      </div>
    </PageResult>
  );
}
