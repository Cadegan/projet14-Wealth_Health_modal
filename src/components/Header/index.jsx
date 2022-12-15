import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo_HRnet.jpeg";

////

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  //   Button,
  Divider,
} from "@material-ui/core";
import {
  // CheckBoxOutlineBlankOutlined,
  // DraftsOutlined,
  HomeOutlined,
  // Image,
  // InboxOutlined,
  PersonAddAlt1Rounded,
  GroupsRounded,
  // ListAlt,
  // ListAlt,
  // MailOutline,
  // ReceiptOutlined,
} from "@mui/icons-material";
import { Toolbar, IconButton, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";

// const pages = ["Create Employee", "View Current Employees"];
const data = [
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
    //  <a href="employee-list.html">View Current Employees</a>
  },
];

function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0 || false);

  const getList = () => (
    <div style={{ width: 270 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem component={Link} to={item.to} button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
          {/* <ListAlt to={item.to}></ListAlt> */}
          {/* <Route>{item.href}</Route> */}
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
              // component={Link}
              // label="Home"
              // to="/"
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
                aria-label="nav tabs"
              >
                <Tab
                  label="Create Employee"
                  component={Link}
                  to="/"
                  sx={{
                    // my: 2,
                    color: "#4C6306",
                    display: "block",
                    py: 4,
                    // px: 1,
                  }}
                />
                <Tab
                  label="View Current Employees"
                  component={Link}
                  to="/employee-list"
                  sx={{
                    // my: 2,
                    color: "#4C6306",
                    display: "block",
                    py: 4,
                    // px: 1,
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
              // href=""
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
