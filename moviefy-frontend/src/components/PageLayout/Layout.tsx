import Navbar from "@/components/PageLayout/Navbar/Navbar";
import useLoading from "@/hooks/useLoading";
import Loading from "@/components/PageLayout/Loading";
import Footer from "@/components/PageLayout/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { useTheme } from "@/context/theme";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Layout() {
  const { loading } = useLoading();
  const { theme } = useTheme();
  const isMedium = useMediaQuery("(min-width: 768px)");
  return (
    <>
      {loading && <Loading />}
      <Navbar />
      <main className="px-1 md:px-4">
        <Outlet />
      </main>
      <Toaster
        theme={theme}
        richColors
        position={isMedium ? "bottom-right" : "bottom-center"}
        closeButton
      />
      <Footer />
    </>
  );
}
