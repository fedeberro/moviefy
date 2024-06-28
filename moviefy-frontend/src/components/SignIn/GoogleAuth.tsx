import { GoogleIcon } from "@/assets/GoogleIcon";
import Button from "../Buttons/Button";
import HorizontalSeparator from "../HorizontalSeparator";

export default function GoogleAuth() {
  return (
    <>
      <HorizontalSeparator>O</HorizontalSeparator>
      <div className="flex flex-col">
        <Button variant={"secondary"} icon={<GoogleIcon />}>
          Iniciar sesión con Google
        </Button>
      </div>
    </>
  );
}
