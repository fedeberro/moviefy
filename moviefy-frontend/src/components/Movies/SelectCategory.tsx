import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GENRES_ID } from "@/constants/genres";

interface Props {
  category: string;
  changeCategory: (value: string) => void;
}

export default function SelectCategory({ category, changeCategory }: Props) {
  return (
    <Select value={category} onValueChange={changeCategory}>
      <SelectTrigger className="w-full md:w-96">
        <SelectValue placeholder="Seleccioná un género" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Géneros</SelectLabel>
          {(Object.keys(GENRES_ID) as Array<keyof typeof GENRES_ID>).map(
            (key) => (
              <SelectItem value={GENRES_ID[key].id} key={GENRES_ID[key].id}>
                {GENRES_ID[key].title}
              </SelectItem>
            )
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
