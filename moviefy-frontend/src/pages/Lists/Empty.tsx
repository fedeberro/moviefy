import DiscoverButton from "@/components/Buttons/DiscoverButton";
import PageResult from "@/components/PageLayout/PageResult";
import { Film } from "lucide-react";

export default function Empty() {
  return (
    <PageResult
      icon={<Film className="w-40 h-40 text-primary" />}
      title="Parece que tu lista está vacía"
      description="Buscá tus películas favoritas o descubrí nuevas y agregalas a tu lista"
    >
      <DiscoverButton />
    </PageResult>
  );
}
