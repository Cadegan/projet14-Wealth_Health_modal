import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
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
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  Image,
  InboxOutlined,
  ListAlt,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";
import { Toolbar, IconButton, Icon, Tabs, Tab } from "@mui/material";
import { Link, Route } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Create Employee", "View Current Employees"];
const data = [
  {
    name: "Home",
    icon: <HomeOutlined />,
  },
  { name: "Create Employee", icon: <InboxOutlined /> },
  {
    name: "View Current Employees",
    icon: <CheckBoxOutlineBlankOutlined />,
    href: "employee-list.html",
    //  <a href="employee-list.html">View Current Employees</a>
  },
];

function ResponsiveAppBar() {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const getList = () => (
    <div style={{ width: 250 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem button key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
          {/* <Route>{item.href}</Route> */}
        </ListItem>
      ))}
    </div>
  );

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <AppBar position="relative" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop */}
          <Box
            component="img"
            sx={{
              height: 80,
              display: { xs: "none", md: "flex" },
              // margin: 0.8,
            }}
            alt="HRnet logo"
            src={logo}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {/* {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#4C6306", display: "block" }}
              >
                {page}
              </Button>
            ))} */}
            <Tabs
              value={tabValue}
              onChange={handleChange}
              aria-label="nav tabs"
            >
              <LinkTab
                label="Create Employee"
                href="/"
                sx={{ my: 2, color: "#4C6306", display: "block" }}
              />
              <LinkTab
                label="View Current Employees"
                href="/view"
                sx={{ my: 2, color: "#4C6306", display: "block" }}
              />
            </Tabs>
          </Box>

          {/* Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              // mr: 2,
              display: { xs: "flex", md: "none" },
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
          <Box
            component="img"
            sx={{
              height: 80,
              display: { xs: "flex", md: "none" },
              // margin: 0.8,
            }}
            alt="HRnet logo"
            src={logo}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
