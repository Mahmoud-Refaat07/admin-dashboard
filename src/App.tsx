import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme/theme";
import type { PaletteMode } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

export default function App() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<PaletteMode>(
    (localStorage.getItem("theme") as PaletteMode) || "light",
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createTheme(darkTheme(mode));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          setMode={setMode}
        />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
