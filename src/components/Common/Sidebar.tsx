import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { Dashboard, PeopleAlt } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import CategoryIcon from "@material-ui/icons/Category";
import FolderIcon from "@material-ui/icons/Folder";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  link: {
    color: "inherit",
    textDecoration: "none",

    "&.active > div": {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));

export function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <NavLink to="/admin/dashboard" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </NavLink>

        <NavLink to="/admin/product" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </NavLink>
        <NavLink to="/admin/category" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary="Category" />
          </ListItem>
        </NavLink>
        <NavLink to="/admin/user" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItem>
        </NavLink>
        <NavLink to="/admin/message" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ChatBubbleIcon />
            </ListItemIcon>
            <ListItemText primary="Message" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}
