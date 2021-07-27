import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ListCategory } from "../../features/Category";
import Dashboard from "../../features/Dashboard";
import { ListProduct } from "../../features/Product";
import { ListUser } from "../../features/User";
import { Header, Sidebar } from "../Common";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "240px 1fr",
    gridTemplateAreas: `"header header" "sidebar main"`,

    minHeight: "100vh",
  },

  header: {
    gridArea: "header",
  },
  sidebar: {
    gridArea: "sidebar",
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
  },
  main: {
    gridArea: "main",
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    padding: theme.spacing(2, 3),
  },
}));
export interface AdminLayoutProps {}

export default function AdminLayout(props: AdminLayoutProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Box className={classes.header}>
          <Header />
        </Box>
        <Box className={classes.content}>
          <Switch>
            <Route path="/admin/dashboard">
              <Dashboard />
            </Route>
            <Route path="/admin/product">
              <ListProduct />
            </Route>
            <Route path="/admin/user">
              <ListUser />
            </Route>
            <Route path="/admin/category">
              <ListCategory />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}
