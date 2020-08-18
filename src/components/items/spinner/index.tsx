import React from 'react';

import { CircularProgress, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        spinnerContainer: {
           height: `calc(100vh + 64px)`,
           display: "flex"
        },
        spinner: {
            margin: "auto"
        }
    }),
);

export const Spinner = () => {
    const classes = useStyles();

    return(
        <div className={classes.spinnerContainer}>
            <CircularProgress className={classes.spinner}/>
        </div>
    );
};