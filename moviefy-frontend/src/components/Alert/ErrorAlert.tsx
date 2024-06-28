import { Alert, AlertTitle } from "../ui/alert";
import { AlertCircle } from "lucide-react";

interface Props {
  error: string;
}

export default function ErrorAlert({ error }: Props) {
  return (
    <Alert
      variant={"destructive"}
      className=" bg-red-100/60 dark:bg-red-950/50 dark:text-red-500"
    >
      <AlertCircle className="h-4 w-4 dark:text-red-500" />
      <AlertTitle>{error}</AlertTitle>
    </Alert>
  );
}
