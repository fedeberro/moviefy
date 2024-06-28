import { useState } from "react";
import { Input } from "../ui/input";
import Button from "../Buttons/Button";
import { Eye, EyeOff } from "lucide-react";
import { ControllerRenderProps } from "react-hook-form";

interface Props {
  field: ControllerRenderProps;
  className?: string;
}

export default function PasswordField({ field, className = "" }: Props) {
  const [seePassword, setSeePassword] = useState(false);
  return (
    <div className="relative w-full">
      <Input
        {...field}
        type={seePassword ? "text" : "password"}
        className={`pr-8 ${className}`}
      />
      <Button
        className="absolute right-3 top-3 h-4 w-4"
        icon={
          !seePassword ? (
            <Eye className="text-muted-foreground" />
          ) : (
            <EyeOff className="text-muted-foreground" />
          )
        }
        type="button"
        onClick={() => setSeePassword((prev) => !prev)}
        tooltip={!seePassword ? "Mostrar contraseña" : "Ocultar contraseña"}
        variant={"ghost"}
      />
    </div>
  );
}
