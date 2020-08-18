import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      alignItems: "flex-end",
      zIndex: 2,
    },
    appBar: {
      borderTop: `10px solid #d18e1b`,
    },
    title: {
      flexGrow: 1,
      marginLeft: "10px"
    },
  })
);

export const MainAppBar = () =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <EventAvailableOutlinedIcon fontSize="large" />
          <Typography variant="h5" className={classes.title}>
            Event Tracking
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
