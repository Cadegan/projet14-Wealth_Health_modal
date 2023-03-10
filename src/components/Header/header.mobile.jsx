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

/**
 * @description An array of objects representing the options in the navigation drawer.
 *
 * @type {Object[]}
 */
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

/**
 * @description Styles for the `MobileNav` component.
 */
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

/**
 * @description The mobile navigation menu.
 *
 * @param {boolean} open - The open state of the mobile navigation menu.
 * @param {function()} setOpen - A function to toggle the open state of the mobile navigation menu.
 * @param {Object} classes - The classes object generated by the makeStyles function from @material-ui/core, containing the styles for the component.
 * @returns {React.Component} The rendered mobile navigation menu.
 */
function MobileNav() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  /**
   * @description Renders a list of items for the mobile navigation menu.
   *
   * @returns {React.Component} The rendered list of items for the mobile navigation menu.
   */
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
          justifyContent: "space-between",
          display: { xs: "flex", md: "none" },
        }}
      >
        <IconButton
          size="large"
          aria-label="menuAppbar"
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
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#4C6306",
            textDecoration: "none",
          }}
        >
          HRnet
        </Typography>
        <Box component={Link} label="HomeLinkLogo" to="/">
          <Box
            component="img"
            sx={{
              marginRight: 1.5,
              marginTop: 0.6,
              width: "34.12px",
              height: "40px",
            }}
            src={logo}
            alt="HRnet logo"
          />
        </Box>
      </Box>
    </>
  );
}
export default MobileNav;
