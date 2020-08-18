import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";

import { EventDetailAppBarProps } from "./event-detail-app-bar-props";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            alignItems: "flex-end",
            zIndex: 2,
        },
            appBar: {
            borderTop: "10px solid #d18e1b",
        },
            title: {
            flexGrow: 1,
            marginLeft: "10px"
        },
    })
);

export const EventDetailAppBar = withRouter(({ name } : EventDetailAppBarProps) => {
    const history = useHistory();
    const classes = useStyles();

    const handleBackClick = () => {
        history.push("/");
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit" onClick={handleBackClick}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        { name }
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
});
