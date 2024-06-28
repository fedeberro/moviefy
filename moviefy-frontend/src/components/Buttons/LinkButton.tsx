import Button from "./Button";
import { ButtonProps } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface Props extends ButtonProps {
  path: string;
}

export default function LinkButton({ path, ...props }: Props) {
  const navigate = useNavigate();
  return <Button {...props} onClick={() => navigate(path)} />;
}
