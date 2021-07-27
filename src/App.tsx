import { ThemeProvider } from "@material-ui/core";
import React from "react";
import AdminLayout from "./components/Layout/AdminLayout";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AdminLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
