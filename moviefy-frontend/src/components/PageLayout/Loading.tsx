import { Clapperboard } from "lucide-react";

export default function Loading() {
  return (
    <div
      id="loading"
      className="flex items-center justify-center relative z-50 pointer-events-none"
    >
      <div className="dark:bg-black/80 bg-gray-200/80 absolute"></div>
      <Clapperboard className="animate-pulse w-40 h-40 text-primary" />
    </div>
  );
}
