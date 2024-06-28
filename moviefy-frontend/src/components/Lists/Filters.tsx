import Button from "@/components/Buttons/Button";
import { Filter, X } from "lucide-react";
import { Input } from "../ui/input";
import { MovieResultsFilter } from "../Movies/MovieResults";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { GENRES_LIST } from "@/constants/genres";

interface Props {
  filters: MovieResultsFilter;
  updateFilters: (value: MovieResultsFilter) => void;
}

export default function Filters({ filters, updateFilters }: Props) {
  const handleGenres = (checked: boolean | string, id: number) => {
    if (checked) {
      if (!filters.genre_ids.includes(id)) {
        updateFilters({ ...filters, genre_ids: [...filters.genre_ids, id] });
      }
    } else {
      const genre_ids = [...filters.genre_ids];
      updateFilters({
        ...filters,
        genre_ids: [...genre_ids.filter((genre) => genre !== id)],
      });
    }
  };

  return (
    <div className="flex gap-2 w-full">
      <Input
        placeholder="Buscar por título..."
        value={filters.query}
        onChange={(e) => updateFilters({ ...filters, query: e.target.value })}
      />
      <Sheet>
        <SheetTrigger asChild>
          <Button icon={<Filter />} variant={"secondary"}>
            Géneros
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-2">
            <SheetTitle>Filtrar géneros</SheetTitle>
          </SheetHeader>
          <div className="flex gap-2 flex-col">
            {GENRES_LIST.map((genre) => (
              <div className="flex gap-2" key={genre.id}>
                <Checkbox
                  id={`${genre.id}`}
                  onCheckedChange={(value) => handleGenres(value, genre.id)}
                  checked={filters.genre_ids.includes(genre.id)}
                />
                <label
                  htmlFor={`${genre.id}`}
                  className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {genre.name}
                </label>
              </div>
            ))}
            <Button
              icon={<X />}
              onClick={() => updateFilters({ ...filters, genre_ids: [] })}
              variant="secondary"
            >
              Limpiar filtro
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
