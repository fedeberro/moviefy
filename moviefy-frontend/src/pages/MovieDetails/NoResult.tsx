import HomeButton from "@/components/Buttons/HomeButton";
import PageResult from "@/components/PageLayout/PageResult";
import { Popcorn } from "lucide-react";

export default function NoResult() {
  return (
    <PageResult
      icon={<Popcorn className="w-40 h-40 text-primary" />}
      title="Parece que esta película no existe"
      description="Probá denuevo con otra película"
    >
      <HomeButton />
    </PageResult>
  );
}
