import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@/components/Buttons/Button";

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get("query") || "";
    setQuery(query);
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    navigate(
      `/buscar?query=${query.replace(/ /g, "+")}&filter=${
        searchParams.get("filter") || "movies"
      }`
    );
  };

  return (
    <div className="flex items-center w-full gap-2">
      <div className="relative w-full">
        <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <form onSubmit={handleSearch}>
          <Input
            placeholder="Buscá una película..."
            className="pl-8"
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            name="query"
            autoComplete="off"
          />
        </form>
        <Button
          icon={<X className="h-4 w-4" />}
          className="absolute right-0 top-0"
          variant="ghost"
          onClick={() => setQuery("")}
        />
      </div>
    </div>
  );
}
