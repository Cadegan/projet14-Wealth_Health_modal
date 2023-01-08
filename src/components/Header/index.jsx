import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import DesktopNav from "./header.desktop";
import { Toolbar } from "@mui/material";
import MobileNav from "./header.mobile";

function ResponsiveAppBar() {
  return (
    <AppBar
      elevation={0}
      position="relative"
      sx={{ bgcolor: "white", borderBottom: 1, borderColor: "grey.300" }}
    >
      <Container sx={{ maxWidth: "xl" }} disableGutters>
        <Toolbar disableGutters>
          <DesktopNav />
          <MobileNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
