import E404 from "@/pages/E404";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Lists from "@/pages/Lists/Lists";
import useAuth from "@/hooks/useAuth";
import NotSignedUp from "@/pages/Lists/NotSignedUp";
import SignIn from "@/pages/Auth/SignIn";
import SignUp from "@/pages/Auth/SignUp";
import Movie from "@/pages/MovieDetails/Movie";
import Search from "@/pages/Search/Search";
import Layout from "@/components/PageLayout/Layout";
import Actor from "./pages/ActorDetails/Actor";
import SignUpConfirmation from "./pages/Auth/SignUpConfirmation";
import VerifyRecoverPasswordToken from "./pages/Auth/VerifyRecoverPasswordToken";
import EmailVerification from "./pages/Auth/EmailVerification";
import SendRecoveryEmail from "./pages/Auth/SendRecoveryEmail";
import RecoverPassword from "./pages/Auth/RecoverPassword";

export default function App() {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route
          path="/listas"
          element={currentUser ? <Lists /> : <NotSignedUp />}
        />
        <Route path="/iniciar-sesion" element={<SignIn />} />
        <Route
          path="/iniciar-sesion/restablecer-contraseña"
          element={<VerifyRecoverPasswordToken />}
        />
        <Route
          path="/iniciar-sesion/restablecer-contraseña/restablecer"
          element={<RecoverPassword />}
        />
        <Route
          path="/iniciar-sesion/enviar-email-recuperacion"
          element={<SendRecoveryEmail />}
        />
        <Route path="/registrarse" element={<SignUp />} />
        <Route
          path="/registrarse/confirmacion"
          element={<SignUpConfirmation />}
        />
        <Route
          path="/registrarse/verificar-email"
          element={<EmailVerification />}
        />
        <Route path="/pelicula/:movieID" element={<Movie />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/persona/:personID" element={<Actor />} />
        <Route path="*" element={<E404 />} />
      </Route>
    </Routes>
  );
}
