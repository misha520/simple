import { ThemeProvider, CssBaseline } from "@material-ui/core";
import * as React from "react";
import { theme } from "./components/foundation";
import HomePage from "./pages";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
