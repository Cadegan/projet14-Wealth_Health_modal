import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo_HRnet.jpeg";

import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles,
} from "@material-ui/core";
import {
  HomeOutlined,
  PersonAddAlt1Rounded,
  GroupsRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

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

const useStyles = makeStyles({
  listItem: {
    "&:hover": {
      color: "#fefffd",
      backgroundColor: "#758a11",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  drawerPaper: {
    backgroundColor: "transparent",
    backdropFilter: "blur(8px)",
  },
  backdrop: {
    backgroundColor: "rgba(255, 255, 255, .40)",
  },
});

function MobileNav() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const getList = () => (
    <div style={{ width: 270 }} onClick={() => setOpen(false)}>
      {drawerOption.map((item, index) => (
        <ListItem
          className={classes.listItem}
          component={Link}
          to={item.to}
          button
          key={index}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </div>
  );

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          alignItems: "center",
          display: { xs: "flex", md: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-label="Bar menu "
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
          classes={{
            paper: classes.drawerPaper,
          }}
          BackdropProps={{
            classes: {
              root: classes.backdrop,
            },
          }}
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
    </>
  );
}
export default MobileNav;
