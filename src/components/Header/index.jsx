import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import logo from "./logo_HRnet.jpeg";

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import {
  HomeOutlined,
  PersonAddAlt1Rounded,
  GroupsRounded,
} from "@mui/icons-material";
import { Toolbar, IconButton, Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const drawerOption = [
  {
    name: "Home",
    icon: <HomeOutlined />,
    component: { Link },
    to: "/",
  },
  {
    name: "Create Employee",
    icon: <PersonAddAlt1Rounded />,
    component: { Link },
    to: "/",
  },
  {
    name: "View Current Employees",
    icon: <GroupsRounded />,
    component: { Link },
    to: "/employee-list",
  },
];

function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  // const location = useLocation();

  const getList = () => (
    <div style={{ width: 270 }} onClick={() => setOpen(false)}>
      {drawerOption.map((item, index) => (
        <ListItem component={Link} to={item.to} button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AppBar position="relative" sx={{ bgcolor: "white" }}>
      <Container sx={{ maxWidth: "xl" }} disableGutters>
        <Toolbar disableGutters>
          {/* Desktop */}
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
                onChange={handleChange}
                aria-label="Navigation"
              >
                <Tab
                  label="Create Employee"
                  component={Link}
                  to="/"
                  sx={{
                    color: "#4C6306",
                    display: "block",
                    py: 4,
                  }}
                />
                <Tab
                  label="View Current Employees"
                  component={Link}
                  to="/employee-list"
                  sx={{
                    color: "#4C6306",
                    display: "block",
                    py: 4,
                  }}
                />
              </Tabs>
            </Box>
          </Box>

          {/* Mobile */}
          <Box
            sx={{
              flexGrow: 1,
              alignItems: "center",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon
                sx={{
                  color: "#4C6306",
                }}
              />
            </IconButton>
            <Drawer
              variant="temporary"
              open={open}
              anchor={"left"}
              onClose={() => setOpen(false)}
            >
              {getList()}
              <Divider />
            </Drawer>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#4C6306",
                textDecoration: "none",
              }}
            >
              HRnet
            </Typography>
            <Box component={Link} label="Home" to="/">
              <Box
                component="img"
                sx={{
                  marginRight: 1.5,
                  height: 40,
                }}
                alt="HRnet logo"
                src={logo}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
