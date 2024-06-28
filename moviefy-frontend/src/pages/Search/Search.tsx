import PageContent from "@/components/PageLayout/PageContent";
import Section from "@/components/PageLayout/Section";
import SearchResults from "@/components/Search/SearchResults";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clapperboard, UserRound } from "lucide-react";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("movies");

  useEffect(() => {
    const query = searchParams.get("query") || "";
    const filter = searchParams.get("filter");
    setQuery(query);
    setFilter(filter || "movies");
  }, [searchParams]);

  return (
    <PageContent title={`Buscar${query && ": " + query}`}>
      <Section className="p-4">
        <Tabs
          value={filter}
          onValueChange={(value) => setSearchParams({ query, filter: value })}
        >
          <TabsList>
            <TabsTrigger value="movies">
              <Clapperboard className="h-4 w-4 mr-2" />
              Películas
            </TabsTrigger>
            <TabsTrigger value="people">
              <UserRound className="h-4 w-4 mr-2" />
              Personas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="movies">
            <SearchResults searchType="movies" />
          </TabsContent>
          <TabsContent value="people">
            <SearchResults searchType="people" />
          </TabsContent>
        </Tabs>
      </Section>
    </PageContent>
  );
}
