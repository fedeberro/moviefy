import Wave from "@/assets/Wave";
import { Paragraph } from "../Typography";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center gap-2 py-2 z-9 mt-2">
      <Paragraph secondary className="font-bold">
        Powered by:
      </Paragraph>
      <a
        href="https://www.themoviedb.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/tmdb_logo.png" alt="TMDB Logo" className="h-4" />
      </a>
      <Wave className="fixed bottom-0 left-0 -z-10 opacity-10 pointer-events-none h-[30dvh] w-full" />
    </footer>
  );
}
