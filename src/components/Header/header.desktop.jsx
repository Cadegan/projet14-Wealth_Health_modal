import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logo from "./logo_HRnet.jpeg";
import { makeStyles } from "@material-ui/core";
import { Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#4C6306",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      // backgroundColor: "green",
      color: "#4C6306",
    },
  },
});

function DesktopNav() {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    // Set tabValue to current address
    if (location.pathname === "/") {
      setTabValue(0);
    } else if (location.pathname === "/employee-list") {
      setTabValue(1);
    }
    // else {
    //   setTabValue(null);
    // }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          alignItems: "center",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box component={Link} label="Home" to="/">
          <Box
            component="img"
            sx={{
              mx: 1,
              height: 65,
            }}
            alt="HRnet logo"
            src={logo}
          />
        </Box>

        <Typography
          component={Link}
          label="Home"
          to="/"
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#4C6306",
            textDecoration: "none",
          }}
        >
          HRnet
        </Typography>
        <Box>
          <Tabs
            value={tabValue}
            className={classes.tabs}
            onChange={handleChange}
            aria-label="NavigationTab"
          >
            <Tab
              label="Create Employee"
              component={Link}
              to="/"
              sx={{
                // color: "#4C6306",
                display: "block",
                py: 4,
              }}
            />
            <Tab
              label="View Current Employees"
              component={Link}
              to="/employee-list"
              sx={{
                // color: "#4C6306",
                display: "block",
                py: 4,
              }}
            />
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
export default DesktopNav;
