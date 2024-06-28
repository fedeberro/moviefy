import MovieCategory from "@/components/Movies/MovieCategory";
import PageContent from "@/components/PageLayout/PageContent";
import { GENRES_ID } from "@/constants/genres";
import { Flame, X } from "lucide-react";
import { GENRES, GENRE_ICONS } from "./featuredGenres";
import Section from "@/components/PageLayout/Section";
import SelectCategory from "@/components/Movies/SelectCategory";
import { useEffect, useState } from "react";
import MovieResults from "@/components/Movies/MovieResults";
import { getMoviesByGenre } from "@/api/getMoviesByGenre";
import { MovieResult } from "@/interfaces/apiResults";
import Button from "@/components/Buttons/Button";
import useLoading from "@/hooks/useLoading";
import Hero from "@/components/PageLayout/Hero";

export default function Home() {
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [movieResults, setMovieResults] = useState<MovieResult[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const { setLoading, loading } = useLoading();

  useEffect(() => {
    if (category) {
      setLoading(true);
      getMoviesByGenre(category, page)
        .then((response) => {
          if (response.results.length !== 0) {
            setMovieResults([...movieResults, ...response.results]);
            setTotalResults(response.total_results);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [category, page]);

  const handleChangeCategory = (category: string) => {
    setPage(1);
    setMovieResults([]);
    setCategory(category);
  };

  return (
    <div className="flex gap-2 flex-col">
      <Hero />
      <Section className="p-2">
        <MovieCategory category="Tendencias" icon={<Flame />} />
      </Section>
      <PageContent title="Descubrir">
        <div className="flex gap-2 w-full mb-2 md:items-center items-end">
          <div className="flex gap-1 flex-col md:flex-row items-start md:items-center w-full">
            <SelectCategory
              category={category}
              changeCategory={handleChangeCategory}
            />
          </div>
          {category && (
            <Button
              variant={"ghost"}
              icon={<X />}
              onClick={() => setCategory("")}
            >
              Limpiar filtro
            </Button>
          )}
        </div>
        <Section className="flex flex-col gap-2 p-2 items-end">
          {!category ? (
            GENRES.map((genre) => (
              <MovieCategory
                key={genre}
                category={GENRES_ID[genre].title}
                icon={GENRE_ICONS[genre]}
                genreID={GENRES_ID[genre].id}
              />
            ))
          ) : (
            <div className="flex flex-col gap-2">
              <MovieResults results={movieResults} />
              {totalResults > movieResults.length && (
                <Button onClick={() => setPage(page + 1)} loading={loading}>
                  Ver más
                </Button>
              )}
            </div>
          )}
        </Section>
      </PageContent>
    </div>
  );
}
