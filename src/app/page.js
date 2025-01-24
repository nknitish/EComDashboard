"use Client";
import Home from "./component/pages/Home";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <CssBaseline />
      <Home />;
    </AppProvider>
  );
}
