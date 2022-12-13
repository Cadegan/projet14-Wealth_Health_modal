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
  InboxOutlined,
  ListAlt,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";
import { Toolbar, IconButton } from "@mui/material";
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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HRnet
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              open={open}
              anchor={"left"}
              onClose={() => setOpen(false)}
            >
              {getList()}
              <Divider />
              {getList()}
            </Drawer>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HRnet
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import {
//   Drawer,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Button,
//   Divider,
// } from "@material-ui/core";
// import {
//   CheckBoxOutlineBlankOutlined,
//   DraftsOutlined,
//   HomeOutlined,
//   InboxOutlined,
//   MailOutline,
//   ReceiptOutlined,
// } from "@mui/icons-material";
// import { Toolbar, IconButton } from "@mui/material";
// import { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";

// const data = [
//   {
//     name: "Home",
//     icon: <HomeOutlined />,
//   },
//   { name: "Inbox", icon: <InboxOutlined /> },
//   { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
//   { name: "Sent mail", icon: <MailOutline /> },
//   { name: "Draft", icon: <DraftsOutlined /> },
//   { name: "Trash", icon: <ReceiptOutlined /> },
// ];

// function Nav() {
//   const [open, setOpen] = useState(false);

//   const getList = () => (
//     <div style={{ width: 250 }} onClick={() => setOpen(false)}>
//       {data.map((item, index) => (
//         <ListItem button key={index}>
//           <ListItemIcon>{item.icon}</ListItemIcon>
//           <ListItemText primary={item.name} />
//         </ListItem>
//       ))}
//     </div>
//   );
//   return (
//     <>
//       <Toolbar disableGutters>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={() => setOpen(true)}
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//       </Toolbar>
//       <div>
//         <Drawer
//           variant="temporary"
//           open={open}
//           anchor={"left"}
//           onClose={() => setOpen(false)}
//         >
//           {getList()}
//           <Divider />
//           {getList()}
//         </Drawer>
//       </div>
//     </>
//   );
// }

// export default Nav;
