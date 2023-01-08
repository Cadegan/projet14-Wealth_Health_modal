import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import DesktopNav from "./header.desktop";
import { Toolbar } from "@mui/material";
import MobileNav from "./header.mobile";

function ResponsiveAppBar({
  elevation = 0,
  position = "relative",
  bgcolor = "white",
  borderBottom = 1,
  borderColor = "grey.300",
}) {
  return (
    <React.Fragment>
      <AppBar
        elevation={elevation}
        position={position}
        sx={{ bgcolor, borderBottom, borderColor }}
      >
        <Container sx={{ maxWidth: "xl" }} disableGutters>
          <Toolbar disableGutters>
            <DesktopNav />
            <MobileNav />
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}

export default React.memo(ResponsiveAppBar);
