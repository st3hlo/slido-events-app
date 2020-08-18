import React, { useContext, useEffect, useState } from 'react';

import { RouteComponentProps, withRouter, useHistory } from 'react-router-dom';
import { format } from 'date-fns';

import { Box, makeStyles, Typography, Card, Fab } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SubjectIcon from '@material-ui/icons/Subject';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Delete from '@material-ui/icons/Delete';

import { GlobalState } from '../../../store';
import { State } from '../../../models/store/State';
import { listEvents, deleteEvent } from '../../../store/reducers/event/list';

import { DeleteEventDialog } from '../delete-event-dialog';

const useStyles = makeStyles({
    root: {
        maxWidth: 100,
    },
    card: {
        width: "1100px",
        margin: "auto",
        marginTop: "160px",
        paddingBottom: "32px"
    },
    media: {
        height: 350,
        display: "flex",
        borderRadius: "4px",
        marginRight: "auto",
        marginLeft: "auto"
    },
    title: {
        marginBottom: "32px",
        marginTop: "32px"
    },
    descriptionTitle: {
        marginBottom: "16px",
        marginTop: "32px"
    },
    description: {
       marginBottom: "32px"
    },
    locationTitle: {
        marginBottom: "16px",
        marginTop: "16px"
    },
    location: {
        marginBottom: "32px"
    },
    container: {
        width: "450px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    subjectIcon: {
        marginRight: "10px",
        verticalAlign: "middle"
    },
    locationIcon: {
        marginRight: "10px",
        verticalAlign: "middle"
    },
    dateRangeIcon: {
        marginRight: "10px",
        verticalAlign: "middle"
    },
    deleteFab: {
        position: "fixed", right: "50px", bottom: "50px"
    }
});

export const EventDetail = withRouter((props: RouteComponentProps<{id: string}>) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [{ result: eventList },dispatch] = useContext(GlobalState[State.EventList]);
    const history = useHistory();

    const id = props.match.params.id;

    const currentEvent = eventList?.find((event) => event.id === id);
    const classes = useStyles();

    const handleClose = () => {
        setDeleteDialogOpen(false);
    };

    const handleDeleteIconClick = () => {
        setDeleteDialogOpen(true);
    };

    const handleDelete = () => {
        history.push("/");
        dispatch(deleteEvent({ id }));
    };

    useEffect(() => {
        if (!eventList) {
            dispatch(listEvents());
        }
    }, [id, eventList, dispatch]);

    const renderStartDate = () => {
        if (currentEvent?.startDate && currentEvent?.endDate) {
            return (
                `${format(new Date(currentEvent?.startDate), "dd/MMM/yyyy',' p")}
                 - ${format(new Date(currentEvent?.endDate), "dd/MMM/yyyy',' p")}`
            )
        }
    };

    return(
        <>
            <Card className={classes.card}>
                <Typography
                    className={classes.title}
                    align="center"
                    variant="h4"
                >
                    {currentEvent?.name}
                </Typography>
                <img
                    className={classes.media}
                    src={currentEvent?.image}
                    alt="detailImg"
                />
                <Box className={classes.container}>
                    <Typography
                        className={classes.descriptionTitle}
                        align="left"
                        variant="h5"
                    >
                        <SubjectIcon className={classes.subjectIcon} />
                        Description
                    </Typography>
                    <Typography
                        className={classes.description}
                        align="left"
                        paragraph
                        variant="body2"
                    >
                        {currentEvent?.description}
                    </Typography>
                    <Typography
                        className={classes.locationTitle}
                        align="left"
                        variant="h5"
                    >
                        <LocationOnIcon className={classes.locationIcon} />
                        Location
                    </Typography>
                    <Typography
                        variant="body2"
                        align="left"
                        paragraph
                        className={classes.location}
                    >
                        {currentEvent?.location}
                    </Typography>
                    <Typography
                        align="left"
                        paragraph
                    >
                        <DateRangeIcon className={classes.dateRangeIcon} />
                        Date
                    </Typography>
                    <Typography
                        variant="body2"
                        align="left"
                        paragraph
                    >
                        {renderStartDate()}
                    </Typography>
                    <Typography
                        align="left"
                        paragraph
                    >
                        Price: {currentEvent?.price ? `${currentEvent?.price}€`: "No entry fee"}
                    </Typography>
                </Box>
            </Card>
            <Fab color="primary" aria-label="add" onClick={handleDeleteIconClick} className={classes.deleteFab}>
                <Delete />
            </Fab>
            <DeleteEventDialog handleDelete={handleDelete} onClose={handleClose} isOpen={deleteDialogOpen} />
        </>
    );
});
