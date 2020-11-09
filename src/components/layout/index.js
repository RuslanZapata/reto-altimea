import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
const LayoutPrimary = (props) => {
  let history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button
            color="inherit"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>
      <main>{props.children}</main>
    </>
  );
};

export default LayoutPrimary;
