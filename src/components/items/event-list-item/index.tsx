import * as React from "react";
import * as _ from "lodash"

import { Link } from "react-router-dom";
import { formatDistanceToNow, format, differenceInSeconds} from "date-fns";

import { Typography, Box, makeStyles, ButtonBase } from '@material-ui/core';
import ListItem from "@material-ui/core/ListItem"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Status } from "../../../foundation/Status";

import { EventListItemProps } from "./event-list-item-props";

const useStyles = makeStyles({
    container: {
        display: "flex", 
        flexGrow: 1
    },
    image: {
        width: "150px"
    },
    img: {
        width: '100%',
        borderRadius: "3px",
        maxHeight: '100%'
    },
    startDate: {
        flexGrow: 1,
        marginRight: "20px",
        marginLeft: "20px", 
        width: "100px", 
        alignSelf: "center"
    },
    info: {
        paddingLeft:"20px", 
        marginRight: "30px", 
        flexGrow: 1, 
        width: "300px", 
        alignSelf: "center"
    },
    description: {
        flexGrow: 1, 
        alignSelf: "center", 
        marginRight: "20px",
        width: "400px",
    },
    chevron: {
        alignSelf: "center"
    }
});

const typeMap = {
    [Status.upcoming]: "#00b359",
    [Status.ongoing]: "#f5dd42",
    [Status.expired]: "#d90f0f"
};

export const EventListItem = ({ event }: EventListItemProps) => {
    const classes = useStyles();

    const getStatus = () => {
        if(differenceInSeconds(new Date(event.startDate), new Date()) > 0) return Status.upcoming
        if((differenceInSeconds(new Date(event.startDate), new Date()) < 0) && (differenceInSeconds(new Date(event.endDate), new Date()) > 0)) return Status.ongoing
        return Status.expired
    };
  
    return(
        <>
            <ListItem
                button
                divider
                component={Link}
                to={`/event/${event.id}`}
                className="event-item"
                alignItems="center"
                style={{borderLeft: `8px solid ${typeMap[getStatus()]}`}}

            >
                <Box className={classes.container}>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={event.image} />
                    </ButtonBase>
                    <Box className={classes.startDate}>
                        <Typography variant="subtitle1">
                            {formatDistanceToNow(new Date(event.startDate),{addSuffix: true})}
                        </Typography>
                    </Box>
                    <Box className={classes.info}>
                        <Typography variant="h6">
                            {_.truncate(event.name, {length: 30})}
                        </Typography>
                        <Typography variant="caption">
                            {event.location}
                        </Typography>
                        <Typography color="primary" variant="subtitle2">
                           {format(new Date(event.startDate), "dd/MMM/yyyy 'at' p")}
                        </Typography>
                    </Box>
                    <Box className={classes.description} >
                        <Typography style={{overflow: "auto"}} >
                            {_.truncate(event.description, {length: 100})}
                        </Typography>
                    </Box>
                    <Box className={classes.chevron}>
                        <ChevronRightIcon color="disabled" />
                    </Box>
                </Box>
            </ListItem>
        </>
    );
};
