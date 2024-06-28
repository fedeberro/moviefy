import { Clapperboard } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <Clapperboard className="text-primary w-10 h-10 hover:-rotate-12 transition-transform duration-300" />
    </Link>
  );
}
