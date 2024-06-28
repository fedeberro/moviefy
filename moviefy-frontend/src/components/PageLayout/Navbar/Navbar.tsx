import { Separator } from "@radix-ui/react-separator";
import Navigation from "./Navigation";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Actions from "./Actions";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Navbar() {
  const isMedium = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {isMedium ? (
        <nav className="hidden md:flex border-b gap-4 items-center justify-between w-full h-14 z-20 px-8 py-2 sticky top-0 left-0 mb-4 backdrop-blur-lg  dark:bg-black/70 bg-white/70">
          <Logo />
          <Navigation />
          <Separator
            orientation="vertical"
            className="bg-border h-[40px] w-[1px]"
          />
          <SearchBar />
          <Separator
            orientation="vertical"
            className="bg-border h-[40px] w-[1px]"
          />
          <Actions />
        </nav>
      ) : (
        <nav className="md:hidden border-b flex gap-4 items-center justify-between w-full flex-col px-4 py-2 h-auto z-20 mb-2 sticky top-0 left-0 backdrop-blur-md dark:bg-black/70 bg-white/70">
          <div className="flex items-center justify-between w-full">
            <Logo />
            <Actions />
          </div>
          <div className="flex gap-4 w-full">
            <Navigation />
            <Separator
              orientation="vertical"
              className="bg-border h-[40px] w-[1px]"
            />
            <SearchBar />
          </div>
        </nav>
      )}
    </>
  );
}
