import PageContent from "@/components/PageLayout/PageContent";
import Empty from "./Empty";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Section from "@/components/PageLayout/Section";
import useLists from "@/hooks/useLists";
import MovieResults, {
  MovieResultsFilter,
} from "@/components/Movies/MovieResults";
import { Bookmark, Check, Heart } from "lucide-react";
import Filters from "@/components/Lists/Filters";
import { useState } from "react";

export default function Lists() {
  const { watchlist, seen, favorites } = useLists();
  const [filters, setFilters] = useState<MovieResultsFilter>({
    query: "",
    genre_ids: [],
  });

  const handleChangeFilters = (filters: MovieResultsFilter) => {
    setFilters(filters);
  };

  return (
    <PageContent title="Listas">
      <Section className="p-4 relative">
        <Tabs defaultValue="watchlist">
          <div className="flex justify-between gap-2 flex-col md:flex-row">
            <TabsList className="w-fit">
              <TabsTrigger value="watchlist">
                <Bookmark className="h-4 w-4 mr-2" />
                Watchlist
              </TabsTrigger>
              <TabsTrigger value="seen">
                <Check className="h-4 w-4 mr-2" />
                Vistas
              </TabsTrigger>
              <TabsTrigger value="favorites">
                <Heart className="h-4 w-4 mr-2" />
                Favoritas
              </TabsTrigger>
            </TabsList>
            <Filters updateFilters={handleChangeFilters} filters={filters} />
          </div>
          <TabsContent value="watchlist">
            {watchlist.length === 0 ? (
              <Empty />
            ) : (
              <MovieResults results={watchlist} filters={filters} />
            )}
          </TabsContent>
          <TabsContent value="seen">
            {seen.length === 0 ? (
              <Empty />
            ) : (
              <MovieResults results={seen} filters={filters} />
            )}
          </TabsContent>
          <TabsContent value="favorites">
            {favorites.length === 0 ? (
              <Empty />
            ) : (
              <MovieResults results={favorites} filters={filters} />
            )}
          </TabsContent>
        </Tabs>
      </Section>
    </PageContent>
  );
}
