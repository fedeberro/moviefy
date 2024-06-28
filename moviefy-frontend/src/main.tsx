import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { ThemeProvider } from "./context/theme.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import AuthControl from "./components/PageLayout/AuthControl.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <TooltipProvider delayDuration={150}>
        <BrowserRouter>
          <AuthControl>
            <App />
          </AuthControl>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </Provider>
);
