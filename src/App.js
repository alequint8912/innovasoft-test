import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Routes from "routes";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalProvider } from "context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <CssBaseline />
      <Routes />
    </GlobalProvider>
  );
}

export default App;
