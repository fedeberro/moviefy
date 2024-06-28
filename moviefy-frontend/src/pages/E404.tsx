import { XOctagon } from "lucide-react";
import PageResult from "@/components/PageLayout/PageResult";
import HomeButton from "@/components/Buttons/HomeButton";

export default function E404() {
  return (
    <PageResult
      icon={<XOctagon className="w-40 h-40 text-primary" />}
      title="Error 404"
      description="La página que buscás no existe"
    >
      <HomeButton />
    </PageResult>
  );
}
